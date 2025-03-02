import { Router } from "express";
import { getCategoriesController } from "./categoryDependencies";

export const categoryRouter = Router();

categoryRouter.use("/", getCategoriesController.run.bind(getCategoriesController));