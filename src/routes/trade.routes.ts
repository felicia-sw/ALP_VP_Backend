import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { viewTradeHistory, viewTradeDetail } from "../controllers/trade.controller";

const router = Router();

router.get("/history", authMiddleware, viewTradeHistory);
router.get("/:id", authMiddleware, viewTradeDetail);

export default router;
