
// src/controllers/profile.controller.ts
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
        username: user.username,
        fullName: user.fullName || user.username, // Fallback to username if no fullName
        location: user.location || "",
        bio: user.bio || null,
        photoUrl: user.photoUrl || null
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

    const { fullName, location, bio } = req.body as {
      fullName?: string;
      location?: string;
      bio?: string;
    };

    if (!fullName && !location && bio === undefined) {
      return next(new ResponseError(400, "At least one field must be provided"));
    }

    const dataToUpdate: any = {};
    if (fullName) dataToUpdate.fullName = fullName;
    if (location) dataToUpdate.location = location;
    if (bio !== undefined) dataToUpdate.bio = bio; // Allow empty string

    const updated = await prismaClient.user.update({
      where: { id: userId },
      data: dataToUpdate
    });

    return res.json({
      data: {
        username: updated.username,
        fullName: updated.fullName || updated.username,
        location: updated.location || "",
        bio: updated.bio || null,
        photoUrl: updated.photoUrl || null
      }
    });
  } catch (err) {
    next(err);
  }
};