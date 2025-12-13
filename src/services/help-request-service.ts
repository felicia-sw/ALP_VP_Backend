import { prismaClient } from "../utils/database-util";
import { CreateHelpRequest, HelpRequestResponse, toHelpRequestResponse, toHelpRequestResponseList } from "../models/help-request-model";
import { Validation } from "../validations/validation";
import { HelpRequestValidation } from "../validations/help-request-validation";
import { ResponseError } from "../error/response-error";

export class HelpRequestService {

    static async create(request: CreateHelpRequest): Promise<HelpRequestResponse> {
        // 1. Validate the input data
        const validatedData = Validation.validate(HelpRequestValidation.CREATE, request);

        // 2. Check if Category exists (Optional but good practice)
        const categoryCount = await prismaClient.category.count({
            where: { id: validatedData.categoryId }
        });
        if (categoryCount === 0) {
            throw new ResponseError(404, "Category not found");
        }

        // 3. Check if User exists
        const userCount = await prismaClient.user.count({
            where: { id: validatedData.userId }
        });
        if (userCount === 0) {
            throw new ResponseError(404, "User not found");
        }

        // 4. Save to Database
        const helpRequest = await prismaClient.helpRequest.create({
            data: {
                nameOfProduct: validatedData.nameOfProduct,
                description: validatedData.description,
                exchangeProductName: validatedData.exchangeProductName,
                location: validatedData.location,
                imageUrl: validatedData.imageUrl || "", // Handle empty string if optional
                userId: validatedData.userId,
                categoryId: validatedData.categoryId
            }
        });

        return toHelpRequestResponse(helpRequest);
    }

    static async getAll(): Promise<HelpRequestResponse[]> {
        const helpRequests = await prismaClient.helpRequest.findMany();
        return toHelpRequestResponseList(helpRequests);
    }
}