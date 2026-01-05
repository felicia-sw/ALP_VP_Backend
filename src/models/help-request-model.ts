import { HelpRequest, User } from "../../generated/prisma";

// 1. Request: What the Android App sends to us
export interface CreateHelpRequest {
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    contactPhone: string;
    contactEmail: string;
    categoryId: number;
    userId: number;
}

// 2. Response: What we send back to Android
export interface HelpRequestResponse {
    id: number;
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    contactPhone: string;
    contactEmail: string;
    isCheckout: boolean;
    userId: number;
    categoryId: number;
}

// 3. Helper: Convert Database Row -> JSON Response
export function toHelpRequestResponse(helpRequest: HelpRequest): HelpRequestResponse {
    return {
        id: helpRequest.id,
        nameOfProduct: helpRequest.nameOfProduct,
        description: helpRequest.description,
        exchangeProductName: helpRequest.exchangeProductName,
        location: helpRequest.location,
        imageUrl: helpRequest.imageUrl,
        contactPhone: helpRequest.contactPhone,
        contactEmail: helpRequest.contactEmail,
        isCheckout: helpRequest.isCheckout,
        userId: helpRequest.userId,
        categoryId: helpRequest.categoryId
    }
}

export function toHelpRequestResponseList(helpRequests: (HelpRequest & { user?: User })[]): HelpRequestResponse[] {
    return helpRequests.map((hr) => toHelpRequestResponse(hr));
}