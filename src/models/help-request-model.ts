import { HelpRequest, User } from "../../generated/prisma";

// 1. Request: What the Android App sends to us
export interface CreateHelpRequest {
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    categoryId: number;
    userId: number;
    // --- NEW ---
    contactPhone: string;
    contactEmail?: string; // ? means it can be undefined
}

// 2. Response: What we send back to Android
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
    // --- NEW ---
    contactPhone: string;
    contactEmail: string | null;
}

// 3. Helper: Convert Database Row -> JSON Response
export function toHelpRequestResponse(helpRequest: HelpRequest): HelpRequestResponse {
    return {
        id: helpRequest.id,
        nameOfProduct: helpRequest.nameOfProduct,
        description: helpRequest.description,
        exchangeProductName: helpRequest.exchangeProductName,
        location: helpRequest.location,
        imageUrl: helpRequest.imageUrl || "", // Handle potential nulls
        isCheckout: helpRequest.isCheckout,
        userId: helpRequest.userId,
        categoryId: helpRequest.categoryId,
        // --- NEW ---
        contactPhone: helpRequest.contactPhone,
        contactEmail: helpRequest.contactEmail
    }
}

export function toHelpRequestResponseList(helpRequests: (HelpRequest & { user?: User })[]): HelpRequestResponse[] {
    return helpRequests.map((hr) => toHelpRequestResponse(hr));
}