import { Response, NextFunction } from "express";
import { prismaClient } from "../utils/database-util";
import { UserRequest } from "../models/user-request-model";
import { ResponseError } from "../error/response-error";

// VIEW Trade History
// GET /api/trades/history
// Definisi "trade history" sesuai schema: semua ExchangeInformation yang masuk ke HelpRequest milik user login
export const viewTradeHistory = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) return next(new ResponseError(401, "Unauthorized user!"));

    const exchanges = await prismaClient.exchangeInformation.findMany({
      where: {
        helpRequest: {
          userId: userId
        }
      },
      include: {
        helpRequest: true
      },
      orderBy: {
        id: "desc"
      }
    });

    return res.json({
      data: exchanges.map((ex) => ({
        exchangeInformationId: ex.id,
        helpRequestId: ex.helpRequestId,

        // "Nama partner" dari ExchangeInformation
        partnerName: ex.name,

        // Status: mapping dari helpRequest.isCheckout
        // (kalau sudah checkout => dianggap "Berhasil"/completed)
        status: ex.helpRequest.isCheckout ? "COMPLETED" : "IN_PROGRESS",

        lastUpdated: ex.helpRequest.updatedAt
      }))
    });
  } catch (err) {
    next(err);
  }
};

// VIEW Trade Detail (full info: Nama partner, lokasi, barang barter, gambar)
// GET /api/trades/:exchangeInformationId
export const viewTradeDetail = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) return next(new ResponseError(401, "Unauthorized user!"));

    const exchangeInformationId = Number(req.params.id);
    if (Number.isNaN(exchangeInformationId)) {
      return next(new ResponseError(400, "Invalid exchangeInformationId"));
    }

    const exchange = await prismaClient.exchangeInformation.findFirst({
      where: {
        id: exchangeInformationId,
        helpRequest: {
          userId: userId
        }
      },
      include: {
        helpRequest: true
      }
    });

    if (!exchange) return next(new ResponseError(404, "Trade detail not found"));

    const post = exchange.helpRequest;

    return res.json({
      data: {
        exchangeInformationId: exchange.id,

        // Partner info
        partnerName: exchange.name,
        partnerPhone: exchange.phone,
        partnerEmail: exchange.email,
        partnerDescription: exchange.description,

        // Lokasi (di schema kalian lokasi adanya di HelpRequest)
        location: post.location,

        // Barang barter & gambar (di schema kalian adanya di HelpRequest)
        barter: {
          postNameOfProduct: post.nameOfProduct,
          postDescription: post.description,
          exchangeProductName: post.exchangeProductName,
          imageUrl: post.imageUrl
        },

        // Status
        status: post.isCheckout ? "COMPLETED" : "IN_PROGRESS",

        // timestamps
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      }
    });
  } catch (err) {
    next(err);
  }
};
