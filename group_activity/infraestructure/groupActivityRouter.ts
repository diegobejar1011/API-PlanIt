import { Router } from "express";
import { createGroupActivityInfoController, deleteGroupActivityInfoController, getGroupActivitiesController, getGroupActivitiesInfoController, getGroupActivityInfoController, notifyGroupActivityController, updateGroupActivityInfoController } from "./groupActivityDependencies";

export const groupActivityRouter = Router();

groupActivityRouter.get("/all", getGroupActivitiesInfoController.run.bind(getGroupActivitiesInfoController));
groupActivityRouter.get("/preview", getGroupActivitiesController.run.bind(getGroupActivitiesController));
groupActivityRouter.get("/:id", getGroupActivityInfoController.run.bind(getGroupActivityInfoController));
groupActivityRouter.post("/", createGroupActivityInfoController.run.bind(createGroupActivityInfoController));
groupActivityRouter.put("/:id", updateGroupActivityInfoController.run.bind(updateGroupActivityInfoController));
groupActivityRouter.delete("/:id", deleteGroupActivityInfoController.run.bind(deleteGroupActivityInfoController));
groupActivityRouter.post("/notify/:id", notifyGroupActivityController.run.bind(notifyGroupActivityController));
