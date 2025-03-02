import { Router } from "express";
import { createUserController, validateUserController, saveTokenController } from "./userDependencies";

export const userRouter = Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.post("/login", validateUserController.run.bind(validateUserController));
userRouter.post("/token", saveTokenController.run.bind(saveTokenController));