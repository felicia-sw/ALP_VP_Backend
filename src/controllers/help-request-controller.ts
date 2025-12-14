import { Request, Response, NextFunction } from "express";
import { CreateHelpRequest } from "../models/help-request-model";
import { HelpRequestService } from "../services/help-request-service";

export class HelpRequestController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {

            const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;

          
            const response = await HelpRequestService.getAll(categoryId);

            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await HelpRequestService.getAll();
            
            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }
}