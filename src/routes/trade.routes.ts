import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { viewTradeHistory, viewTradeDetail } from "../controllers/trade.controller";

const tradeRouter = express. Router();

tradeRouter.use(authMiddleware);

tradeRouter.get("/history", viewTradeHistory);
tradeRouter.get("/:id", viewTradeDetail);

export default tradeRouter;