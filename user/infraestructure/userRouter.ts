import { Router } from "express";
import { createUserController, validateUserController } from "./userDependencies";

export const userRouter = Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.post("/login", validateUserController.run.bind(validateUserController));