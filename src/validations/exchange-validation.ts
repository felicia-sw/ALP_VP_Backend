// src/validations/exchange-validation.ts
import { z, ZodType } from "zod";

export class ExchangeValidation {
    static readonly CREATE: ZodType = z.object({
        name: z.string().min(1, "Name is required").max(100),
        phone: z.string().min(1, "Phone number is required").max(20),
        // Optional fields:
        email: z.string().email("Invalid email format").optional().or(z.literal("")),
        description: z.string().optional().or(z.literal("")),
        // Must provide the ID of the post they are replying to
        helpRequestId: z.number().int().positive()
    });
}