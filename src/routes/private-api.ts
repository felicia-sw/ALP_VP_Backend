import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import { viewMyProfile, updateMyProfile } from "../controllers/profile.controller";
import { viewTradeHistory, viewTradeDetail } from "../controllers/trade.controller";
import { ExchangeController } from "../controllers/exchange-controller";

export const privateRouter = express.Router();

privateRouter.use(authMiddleware)

// privateRouter.get("/todo-list", TodoController.getAllTodos)
// privateRouter.get("/todo-list/:todoListId", TodoController.getTodo)
// privateRouter.post("/todo-list", TodoController.createTodo)
// privateRouter.put("/todo-list/:todoListId", TodoController.updateTodo)
// privateRouter.delete("/todo-list/:todoListId", TodoController.deleteTodo)


privateRouter.get("/profile/me", viewMyProfile);
privateRouter.put("/profile/me", updateMyProfile);

privateRouter.get("/trades/:id", viewTradeDetail);

privateRouter.post("/checkout", ExchangeController.checkout);
