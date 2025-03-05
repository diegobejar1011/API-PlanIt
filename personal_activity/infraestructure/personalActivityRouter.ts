import { Router } from "express";
import { createPersonalActivityController, deletePersonalActivityController, getPersonalActivitiesController, getPersonalActivitiesInfoController, getPersonalActivityInfoController, notifyPersonalActivityController, updatePersonalActivityController } from "./personalActivityDependencies";


export const personalActivityRouter = Router();

personalActivityRouter.get("/info/:id", getPersonalActivityInfoController.run.bind(getPersonalActivityInfoController));
personalActivityRouter.get("/info", getPersonalActivitiesInfoController.run.bind(getPersonalActivitiesInfoController))
personalActivityRouter.get("/:userId", getPersonalActivitiesController.run.bind(getPersonalActivitiesController));
personalActivityRouter.post("/", createPersonalActivityController.run.bind(createPersonalActivityController));
personalActivityRouter.put("/:id", updatePersonalActivityController.run.bind(updatePersonalActivityController));
personalActivityRouter.delete("/:id", deletePersonalActivityController.run.bind(deletePersonalActivityController));
personalActivityRouter.post("/notify/:id", notifyPersonalActivityController.run.bind(notifyPersonalActivityController));
