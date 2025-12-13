import express from "express";
import { HelpRequestController } from "../controllers/help-request-controller";

export const publicRouter = express.Router(); // create router object to hold all the rules


// --- HELP REQUEST / POST OFFER ROUTES ---
publicRouter.post("/api/help-requests", HelpRequestController.create);
publicRouter.get("/api/help-requests", HelpRequestController.getAll);