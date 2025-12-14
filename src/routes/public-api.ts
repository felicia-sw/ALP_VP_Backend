import express from "express";
import { HelpRequestController } from "../controllers/help-request-controller";
import { UserController } from "../controllers/user-controller";
import { ExchangeController } from "../controllers/exchange-controller";

export const publicRouter = express.Router(); // create router object to hold all the rules


// --- AUTH (register/login) ---
publicRouter.post("/api/register", UserController.register);
publicRouter.post("/api/login", UserController.login);

// --- HELP REQUEST / POST OFFER ROUTES ---
publicRouter.post("/api/help-requests", HelpRequestController.create);
publicRouter.get("/api/help-requests", HelpRequestController.getAll);

// --- EXCHANGE ROUTES ---
publicRouter.post("/api/exchanges", ExchangeController.create);
// New Routes:
publicRouter.get("/api/exchanges", ExchangeController.getAllExchanges); // Supports ?helpRequestId=1
publicRouter.delete("/api/exchanges/:exchangeId", ExchangeController.deleteExchange);