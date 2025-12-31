import { z, ZodType } from "zod";

export class HelpRequestValidation {
    static readonly CREATE: ZodType = z.object({
        nameOfProduct: z.string().min(1, "Product name is required").max(255),
        description: z.string().min(1, "Description is required"),
        exchangeProductName: z.string().min(1, "Exchange product is required").max(255),
        location: z.string().min(1, "Location is required").max(255),
        imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")), // Optional for now
        categoryId: z.number().int().positive(),
        userId: z.number().int().positive()
    });
}