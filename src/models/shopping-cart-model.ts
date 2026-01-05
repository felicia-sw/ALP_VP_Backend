import { ShoppingCart, ShoppingCartItem, HelpRequest } from "../../generated/prisma";

// Request: What the user sends to add an item
export interface AddToCartRequest {
    userId: number;       // Whose cart is it?
    helpRequestId: number; // Which post are they adding?
}

// Response: A single item in the cart
export interface CartItemResponse {
    helpRequestId: number;
    addedAt: Date;
    productName: string;
    description: string;
    price: string; // "Exchange Product Name" acts as price/value
    imageUrl: string;
}

// Response: The full cart
export interface ShoppingCartResponse {
    id: number;
    userId: number;
    items: CartItemResponse[];
}

// Helper: Convert Database format -> JSON Response
export function toShoppingCartResponse(cart: ShoppingCart & { items: (ShoppingCartItem & { helpRequest: HelpRequest })[] }): ShoppingCartResponse {
    return {
        id: cart.id,
        userId: cart.userId,
        items: cart.items.map(item => ({
            helpRequestId: item.helpRequestId,
            addedAt: item.addedAt,
            productName: item.helpRequest.nameOfProduct,
            description: item.helpRequest.description,
            price: item.helpRequest.exchangeProductName,
            imageUrl: item.helpRequest.imageUrl || ""
        }))
    };
}