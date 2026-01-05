import { z, ZodType } from "zod";

export class HelpRequestValidation {
    static readonly CREATE: ZodType = z.object({
        nameOfProduct: z.string().min(1, "Product name is required").max(255),
        description: z.string().min(1, "Description is required"),
        exchangeProductName: z.string().min(1, "Exchange product is required").max(255),
        location: z.string().min(1, "Location is required").max(255),
        imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")), // Optional for now
        contactPhone: z.string().min(1, "Contact phone is required").max(20),
        contactEmail: z.string().email("Must be a valid email").max(150),
        categoryId: z.number().int().positive(),
        userId: z.number().int().positive(), 

        // --- NEW FIELDS ADDED HERE ---
        // 1. Phone is required
        contactPhone: z.string().min(1, "Phone number is required").max(20),
        // 2. Email is optional (can be a valid email OR an empty string)
        contactEmail: z.string().email("Invalid email").optional().or(z.literal(""))
    });
}