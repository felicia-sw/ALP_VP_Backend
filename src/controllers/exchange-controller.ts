// src/controllers/exchange-controller.ts
import { Request, Response, NextFunction } from "express";
import { CreateExchangeRequest } from "../models/exchange-model";
import { ExchangeService } from "../services/exchange-service";

export class ExchangeController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            // Treat the JSON body as a CreateExchangeRequest
            const request = req.body as CreateExchangeRequest;
            
            // Call the service
            const response = await ExchangeService.create(request);

            // Send back the result
            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAllExchanges(req: Request, res: Response, next: NextFunction) {
        try {
            // Read query param: /api/exchanges?helpRequestId=1
            const helpRequestId = req.query.helpRequestId ? Number(req.query.helpRequestId) : undefined;
            
            const response = await ExchangeService.getAll(helpRequestId);

            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteExchange(req: Request, res: Response, next: NextFunction) {
        try {
            // Read path param: /api/exchanges/5
            const exchangeId = Number(req.params.exchangeId);

            const response = await ExchangeService.delete(exchangeId);

            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }
}