import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { viewMyProfile, updateMyProfile } from "../controllers/profile.controller";

const profileRouter = express.Router();

// Auth middleware
profileRouter.use(authMiddleware);

// Routes
profileRouter.get("/me", viewMyProfile);
profileRouter.put("/me", updateMyProfile);

export default profileRouter;