import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"
import { ResponseError } from "../error/response-error"

export const errorMiddleware = async (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Log the full error for debugging
    console.error("Error occurred:", error);
    console.error("Error stack:", error.stack);
    
    if (error instanceof ResponseError) {
        res.status(error.status).json({
            errors: error.message
        }).end();
    } 
    else if (error instanceof ZodError) {
        res.status(400).json({
            errors: "Validation Error:  " + JSON.stringify(error.issues)
        }).end();
    } 
    else {
        res.status(500).json({
            errors: error.message || "Internal Server Error"
        }).end();
    }
};