import { Request, Response, NextFunction } from "express";
import { prismaClient } from "../utils/database-util";
import * as bcrypt from "bcrypt";
import {
    LoginUserRequest,
    RegisterUserRequest,
    toUserResponse,
} from "../models/user-model";
import { Validation } from "../validations/validation";
import { UserValidation } from "../validations/user-validation";

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body as RegisterUserRequest;

            Validation.validate(UserValidation.REGISTER, request);

            // Check if user with same email exists
            const existing = await prismaClient.user.findUnique({
                where: { email: request.email },
            });
            if (existing) {
                return res.status(409).json({ message: "Email already registered" });
            }

            const hashed = await bcrypt.hash(request.password, 10);

            const user = await prismaClient.user.create({
                data: {
                    username: request.username,
                    email: request.email,
                    password: hashed,
                },
            });

            const response = toUserResponse(user.id, user.username, user.email);

            res.status(201).json({ data: response });
        } catch (error) {
            next(error);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body as LoginUserRequest;

            const user = await prismaClient.user.findUnique({
                where: { email: request.email },
            });

            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const match = await bcrypt.compare(request.password, user.password);
            if (!match) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const response = toUserResponse(user.id, user.username, user.email);

            res.status(200).json({ data: response });
        } catch (error) {
            next(error);
        }
    }

    
}


// import { Request, Response, NextFunction } from "express"
// import {
//     LoginUserRequest,
//     RegisterUserRequest,
//     UserResponse,
// } from "../models/user-model"
// // import { UserService } from "../services/user-service"

// export class UserController {
//     static async register(req: Request, res: Response, next: NextFunction) {
//         // try {
//         //     const request: RegisterUserRequest = req.body as RegisterUserRequest
//         //     const response: UserResponse = await UserService.register(request)
//         //     res.status(200).json({
//         //         data: response,
//         //     })
//         // } catch (error) {
//         //     next(error)
//         // }
//     }

//     static async login(req: Request, res: Response, next: NextFunction) {
//         // try {
//         //     const request: LoginUserRequest = req.body as LoginUserRequest
//         //     const response: UserResponse = await UserService.login(request)
//         //     // buat logic nya disini -- kalo ga mau bikin file service" segala macam, tapi kalo pake service lebih rapi
//         //     res.status(200).json({
//         //         data: response,
//         //     })
//         // } catch (error) {
//         //     next(error)
//         // }
//     }
// }