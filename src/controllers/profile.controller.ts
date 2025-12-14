import { Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../utils/database-util";
import { UserRequest } from "../models/user-request-model";
import { ResponseError } from "../error/response-error";

// VIEW Profile: GET /api/profile/me
export const viewMyProfile = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) return next(new ResponseError(401, "Unauthorized user!"));

    const user = await prismaClient.user.findUnique({
      where: { id: userId }
    });

    if (!user) return next(new ResponseError(404, "User not found"));

    return res.json({
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE Profile: PUT /api/profile/me
// Yang bisa diupdate sesuai schema: username, email, password
export const updateMyProfile = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) return next(new ResponseError(401, "Unauthorized user!"));

    const { username, email, password } = req.body as {
      username?: string;
      email?: string;
      password?: string;
    };

    if (!username && !email && !password) {
      return next(new ResponseError(400, "At least one field (username/email/password) must be provided"));
    }

    const dataToUpdate: any = {};
    if (username) dataToUpdate.username = username;
    if (email) dataToUpdate.email = email;
    if (password) dataToUpdate.password = await bcrypt.hash(password, 10);

    const updated = await prismaClient.user.update({
      where: { id: userId },
      data: dataToUpdate
    });

    return res.json({
      data: {
        id: updated.id,
        username: updated.username,
        email: updated.email,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt
      }
    });
  } catch (err) {
    next(err);
  }
};
