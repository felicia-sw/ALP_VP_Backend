import { prismaClient } from "../utils/database-util";
import { ShoppingCartValidation } from "../validations/shopping-cart-validation";
import { Validation } from "../validations/validation";
import { AddToCartRequest, ShoppingCartResponse, toShoppingCartResponse } from "../models/shopping-cart-model";
import { ResponseError } from "../error/response-error";

export class ShoppingCartService {

    // 1. GET CART (Find or Create)
    static async get(userId: number): Promise<ShoppingCartResponse> {
        // Attempt to find the user's cart
        let cart = await prismaClient.shoppingCart.findUnique({
            where: { userId: userId },
            include: {
                items: {
                    include: { helpRequest: true }, // Join to get product details
                    orderBy: { addedAt: 'desc' }    // Newest items first
                }
            }
        });

        // If cart doesn't exist, create it automatically
        if (!cart) {
            cart = await prismaClient.shoppingCart.create({
                data: { userId: userId },
                include: {
                    items: { include: { helpRequest: true } }
                }
            });
        }

        return toShoppingCartResponse(cart);
    }

    // 2. ADD ITEM TO CART
    static async add(request: AddToCartRequest): Promise<ShoppingCartResponse> {
        // Validate input
        const validatedRequest = Validation.validate(ShoppingCartValidation.ADD, request);

        // Ensure Cart Exists (Re-use logic or quick find)
        let cart = await prismaClient.shoppingCart.findUnique({
            where: { userId: validatedRequest.userId }
        });

        if (!cart) {
            cart = await prismaClient.shoppingCart.create({
                data: { userId: validatedRequest.userId }
            });
        }

        // Check if item is already in the cart to avoid duplicates
        const existingItem = await prismaClient.shoppingCartItem.findUnique({
            where: {
                cartId_helpRequestId: {
                    cartId: cart.id,
                    helpRequestId: validatedRequest.helpRequestId
                }
            }
        });

        if (existingItem) {
            throw new ResponseError(400, "Item is already in your cart");
        }

        // Add the item
        await prismaClient.shoppingCartItem.create({
            data: {
                cartId: cart.id,
                helpRequestId: validatedRequest.helpRequestId
            }
        });

        // Return the updated full cart
        return this.get(validatedRequest.userId);
    }

    // 3. REMOVE ITEM FROM CART
    static async remove(userId: number, helpRequestId: number): Promise<ShoppingCartResponse> {
        const cart = await prismaClient.shoppingCart.findUnique({
            where: { userId: userId }
        });

        if (!cart) {
            throw new ResponseError(404, "Cart not found");
        }

        // Delete the item
        try {
            await prismaClient.shoppingCartItem.delete({
                where: {
                    cartId_helpRequestId: {
                        cartId: cart.id,
                        helpRequestId: helpRequestId
                    }
                }
            });
        } catch (e) {
            throw new ResponseError(404, "Item not found in cart");
        }

        // Return updated cart
        return this.get(userId);
    }
}