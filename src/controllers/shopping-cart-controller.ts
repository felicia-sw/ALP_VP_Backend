import { Request, Response, NextFunction } from "express";
import { ShoppingCartService } from "../services/shopping-cart-service";

export class ShoppingCartController {

    // GET /api/cart?userId=1
    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            // Note: In a real app with login, you'd get userId from req.user
            const userId = Number(req.query.userId); 
            
            if (isNaN(userId)) {
                throw new Error("Invalid userId");
            }

            const response = await ShoppingCartService.get(userId);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    // POST /api/cart (Body: { userId, helpRequestId })
    static async add(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ShoppingCartService.add(req.body);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    // DELETE /api/cart/:helpRequestId?userId=1
    static async remove(req: Request, res: Response, next: NextFunction) {
        try { 
            const userId = Number(req.query.userId);
            const helpRequestId = Number(req.params.helpRequestId);

            if (isNaN(userId) || isNaN(helpRequestId)) {
                throw new Error("Invalid IDs");
            }

            const response = await ShoppingCartService.remove(userId, helpRequestId);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }
}