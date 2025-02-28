import { Router } from "express";
import { createUserController } from "./userDependencies";

export const userRouter = Router();

userRouter.post("/", createUserController.run.bind(createUserController));