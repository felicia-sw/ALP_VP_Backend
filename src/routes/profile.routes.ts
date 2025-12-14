import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { viewMyProfile, updateMyProfile } from "../controllers/profile.controller";

const router = Router();

router.get("/me", authMiddleware, viewMyProfile);
router.put("/me", authMiddleware, updateMyProfile);

export default router;
