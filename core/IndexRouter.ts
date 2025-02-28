import { Router } from "express";
import { userRouter } from "../user/infraestructure/userRouter";

export const indexRouter = Router();

indexRouter.use("/user", userRouter);