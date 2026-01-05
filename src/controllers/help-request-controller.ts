import { Request, Response, NextFunction } from "express";
import { CreateHelpRequest } from "../models/help-request-model";
import { HelpRequestService } from "../services/help-request-service";

export class HelpRequestController {

     static async create(req: Request, res: Response, next: NextFunction) {
        try {
            // Treat body as CreateHelpRequest
            const request = req.body as CreateHelpRequest;
            
            const response = await HelpRequestService.create(request);

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

    static async getByUser(req: Request, res: Response, next: NextFunction) {
        try {
            // Get user ID from the authenticated user
            const userId = (req as any).user.id;
            
            const response = await HelpRequestService.getByUserId(userId);
            
            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }
}