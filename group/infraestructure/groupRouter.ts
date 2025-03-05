import { Router } from "express";
import { addUserAtGroupByTokenController, addUserAtGroupController, createGroupController, deleteGroupController, deleteUserAtGroupController, getGroupByIdController, getGroupsByUserIdController, getUsersAtGroupController, updateGroupController } from "./groupDependencies";

export const groupRouter = Router();

groupRouter.get("/:id", getGroupByIdController.run.bind(getGroupByIdController));
groupRouter.post("/", createGroupController.run.bind(createGroupController));
groupRouter.put("/:id", updateGroupController.run.bind(updateGroupController));
groupRouter.delete("/:id", deleteGroupController.run.bind(deleteGroupController));

groupRouter.post("/user/add", addUserAtGroupController.run.bind(addUserAtGroupController));

groupRouter.get("/user/:id", getUsersAtGroupController.run.bind(getUsersAtGroupController));
groupRouter.delete("/user/:id", deleteUserAtGroupController.run.bind(deleteUserAtGroupController));

groupRouter.post("/user", addUserAtGroupByTokenController.run.bind(addUserAtGroupByTokenController));
groupRouter.get("/user/list/:id", getGroupsByUserIdController.run.bind(getGroupsByUserIdController));
