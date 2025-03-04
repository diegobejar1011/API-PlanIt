import { CreateGroupActivityInfoService, DeleteGroupActivityInfoService, GetGroupActivitiesInfoService, GetGroupActivityInfoService, UpdateGroupActivityInfoService } from "../application";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { CreateGroupActivityInfoController, DeleteGroupActivityInfoController, GetGroupActivitiesInfoController, GetGroupActivityInfoController, UpdateGroupActivityInfoController } from "./controllers";

const mysqlRepository = new MySQLRepository();

const createGroupActivityInfoService = new CreateGroupActivityInfoService(mysqlRepository);
const getGroupActivityInfoService = new GetGroupActivityInfoService(mysqlRepository);
const updateGroupActivityInfoService = new UpdateGroupActivityInfoService(mysqlRepository);
const deleteGroupActivityInfoService = new DeleteGroupActivityInfoService(mysqlRepository);

const getGroupActivitiesInfoService = new GetGroupActivitiesInfoService(mysqlRepository);

export const createGroupActivityInfoController = new CreateGroupActivityInfoController(createGroupActivityInfoService);
export const getGroupActivityInfoController = new GetGroupActivityInfoController(getGroupActivityInfoService);
export const updateGroupActivityInfoController = new UpdateGroupActivityInfoController(updateGroupActivityInfoService);
export const deleteGroupActivityInfoController = new DeleteGroupActivityInfoController(deleteGroupActivityInfoService);

export const getGroupActivitiesInfoController = new GetGroupActivitiesInfoController(getGroupActivitiesInfoService);