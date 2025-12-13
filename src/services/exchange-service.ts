// src/services/exchange-service.ts
import { prismaClient } from "../utils/database-util";
import { CreateExchangeRequest, toExchangeResponse, ExchangeResponse, toExchangeResponseList } from "../models/exchange-model";
import { Validation } from "../validations/validation";
import { ExchangeValidation } from "../validations/exchange-validation";
import { ResponseError } from "../error/response-error";

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