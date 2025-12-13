// src/services/exchange-service.ts
import { prismaClient } from "../utils/database-util";
import { CreateExchangeRequest, toExchangeResponse, ExchangeResponse } from "../models/exchange-model";
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
}