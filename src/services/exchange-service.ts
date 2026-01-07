// src/services/exchange-service.ts
import { prismaClient } from "../utils/database-util";
import { CreateExchangeRequest, toExchangeResponse, ExchangeResponse, toExchangeResponseList } from "../models/exchange-model";
import { Validation } from "../validations/validation";
import { ExchangeValidation } from "../validations/exchange-validation";
import { ResponseError } from "../error/response-error";
import { CheckoutRequest } from "../models/exchange-model";
import { User } from "../../generated/prisma"; // Or wherever your Prisma types are

export class ExchangeService {

    static async create(request: CreateExchangeRequest): Promise<ExchangeResponse> {
        // 1. Validate the input data
        const validatedData = Validation.validate(ExchangeValidation.CREATE, request);

        // 2. Check if the Help Request (Post) actually exists
        const helpRequestCount = await prismaClient.helpRequest.count({
            where: { id: validatedData.helpRequestId }
        });

        if (helpRequestCount === 0) {
            throw new ResponseError(404, "Help Request (Post) not found!");
        }

        // 3. Save to Database
        const exchange = await prismaClient.exchangeInformation.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
                email: validatedData.email || null,
                description: validatedData.description || null,
                helpRequestId: validatedData.helpRequestId
            }
        });

        return toExchangeResponse(exchange);
    }

    // 1. GET ALL (Filter by helpRequestId)
    // We make helpRequestId optional (number | undefined). 
    // If provided, we show offers for THAT post. If not, we show everything.
    static async getAll(helpRequestId?: number): Promise<ExchangeResponse[]> {
        const exchanges = await prismaClient.exchangeInformation.findMany({
            where: {
                helpRequestId: helpRequestId
            }
        });
        
        return toExchangeResponseList(exchanges);
    }

    // 2. DELETE
    static async delete(id: number): Promise<string> {
        // First, check if it exists
        const exchange = await prismaClient.exchangeInformation.findUnique({
            where: { id: id }
        });

        if (!exchange) {
            throw new ResponseError(404, "Exchange offer not found");
        }

        // Then delete it
        await prismaClient.exchangeInformation.delete({
            where: { id: id }
        });

        return "Exchange offer deleted successfully!";
    }

    // NEW: Checkout Method
    static async checkout(userId: number, request: CheckoutRequest): Promise<string> {
        // 1. Get User's Cart with Items
        const cart = await prismaClient.shoppingCart.findUnique({
            where: { userId: userId },
            include: { items: true }
        });

        if (!cart || cart.items.length === 0) {
            throw new ResponseError(400, "Cart is empty!");
        }

        // 2. Perform Transaction (Create Offers + Delete Cart Items)
        // This ensures if one fails, everything is rolled back.
        await prismaClient.$transaction(async (prisma) => {
            
            // A. Loop through cart items and create Exchange Offers
            for (const item of cart.items) {
                await prisma.exchangeInformation.create({
                    data: {
                        name: request.name,
                        phone: request.phone,
                        email: request.email || null,
                        description: `[Batch Offer] ${request.description}`, // Tag it so you know it was a bulk offer
                        helpRequestId: item.helpRequestId
                    }
                });
            }

            // B. Clear the Cart Items
            await prisma.shoppingCartItem.deleteMany({
                where: { cartId: cart.id }
            });
        });

        return `Successfully sent offers for ${cart.items.length} items!`;
    }

//     DELETE /api/exchanges/:id (The "Cancel Offer" Feature)
// What it does: It permanently removes a specific offer from the database.

// Why your Android App needs it:

// In Android, if a user makes a mistake (e.g., offers the wrong item), they need a "Cancel" or "Delete" button on their offer.

// Without this endpoint: The button in your Android app would do nothing. The user would be stuck with a mistake they cannot fix.

// In Kotlin: You will write a Retrofit call like:

// Kotlin

// @DELETE("api/exchanges/{id}")
// fun deleteExchange(@Path("id") id: Int): Call<GeneralResponse>
}