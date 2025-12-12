import express from "express";
import { UserController } from "../controllers/user-controller";

export const publicRouter = express.Router(); // create router object to hold all the rules

publicRouter.post("/register", UserController.register);
publicRouter.post("/login", UserController.login);