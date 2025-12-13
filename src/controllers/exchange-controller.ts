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
}