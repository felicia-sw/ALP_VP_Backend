import { HelpRequest } from "../../generated/prisma";

// What the user sends to the backend
export interface CreateHelpRequest {
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    categoryId: number;
    userId: number; // In a real app, this comes from the logged-in user token
}

// What the backend sends back to the user
export interface HelpRequestResponse {
    id: number;
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    isCheckout: boolean;
    userId: number;
    categoryId: number;
}

// Helper to convert Database Row -> Clean Response
export function toHelpRequestResponse(helpRequest: HelpRequest): HelpRequestResponse {
    return {
        id: helpRequest.id,
        nameOfProduct: helpRequest.nameOfProduct,
        description: helpRequest.description,
        exchangeProductName: helpRequest.exchangeProductName,
        location: helpRequest.location,
        imageUrl: helpRequest.imageUrl,
        isCheckout: helpRequest.isCheckout,
        userId: helpRequest.userId,
        categoryId: helpRequest.categoryId
    }
}

export function toHelpRequestResponseList(helpRequests: HelpRequest[]): HelpRequestResponse[] {
    return helpRequests.map((hr) => toHelpRequestResponse(hr));
}