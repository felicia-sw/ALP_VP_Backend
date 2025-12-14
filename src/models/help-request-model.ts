import { HelpRequest, User } from "../../generated/prisma";

// What the user sends to the backend
export interface CreateHelpRequest {
    nameOfProduct: string;
    description: string;
    exchangeProductName: string;
    location: string;
    imageUrl: string;
    categoryId: number;
    userId: number; // only come from the login user token
}

// User data to include in help request response
export interface UserInHelpRequest {
    id: number;
    username: string;
    email: string;
}

// What the backend sends back to the user with user info included jg
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
    user?: UserInHelpRequest; // User info for homepage cards
}

// Helper to convert Database Row -> Clean Response
export function toHelpRequestResponse(helpRequest: HelpRequest & { user?: User }): HelpRequestResponse {
    return {
        id: helpRequest.id,
        nameOfProduct: helpRequest.nameOfProduct,
        description: helpRequest.description,
        exchangeProductName: helpRequest.exchangeProductName,
        location: helpRequest.location,
        imageUrl: helpRequest.imageUrl,
        isCheckout: helpRequest.isCheckout,
        userId: helpRequest.userId,
        categoryId: helpRequest.categoryId,
        user: helpRequest.user ? {
            id: helpRequest.user.id,
            username: helpRequest.user.username,
            email: helpRequest.user.email
        } : undefined
    }
}

export function toHelpRequestResponseList(helpRequests: (HelpRequest & { user?: User })[]): HelpRequestResponse[] {
    return helpRequests.map((hr) => toHelpRequestResponse(hr));
}