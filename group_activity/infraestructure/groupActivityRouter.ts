import { Router } from "express";
import { createGroupActivityInfoController, deleteGroupActivityInfoController, getGroupActivitiesInfoController, getGroupActivityInfoController, updateGroupActivityInfoController } from "./groupActivityDependencies";

export const groupActivityRouter = Router();

groupActivityRouter.get("/all", getGroupActivitiesInfoController.run.bind(getGroupActivitiesInfoController));
groupActivityRouter.get("/:id", getGroupActivityInfoController.run.bind(getGroupActivityInfoController));
groupActivityRouter.post("/", createGroupActivityInfoController.run.bind(createGroupActivityInfoController));
groupActivityRouter.put("/:id", updateGroupActivityInfoController.run.bind(updateGroupActivityInfoController));
groupActivityRouter.delete("/:id", deleteGroupActivityInfoController.run.bind(deleteGroupActivityInfoController));

