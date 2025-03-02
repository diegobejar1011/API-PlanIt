import { Router } from "express";
import { userRouter } from "../user/infraestructure/userRouter";
import { categoryRouter } from "../category/infraestructure/categoryRouter";
import { personalActivityRouter } from "../personal_activity/infraestructure/personalActivityRouter";

export const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/category", categoryRouter);
indexRouter.use("/personal/activity", personalActivityRouter);