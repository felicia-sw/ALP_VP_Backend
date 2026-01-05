import { z, ZodType } from "zod";

export class ShoppingCartValidation {
    static readonly ADD: ZodType = z.object({
        userId: z.number().int().positive(),
        helpRequestId: z.number().int().positive()
    });
}