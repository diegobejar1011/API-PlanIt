import { sendMultipleNotificationService } from "../../core/notification/infraestructure/adapters/firebase/firebaseServices";
import { getGroupByIdService } from "../../group/infraestructure/groupDependencies";
import { getTokenService } from "../../user/infraestructure/userDependencies";
import { CreateGroupActivityInfoService, DeleteGroupActivityInfoService, GetGroupActivitiesInfoService, GetGroupActivitiesService, GetGroupActivityInfoService, NotifyGroupActivityService, UpdateGroupActivityInfoService } from "../application";

import { MySQLRepository } from "./adapters/MySQLRepository";
import { CreateGroupActivityInfoController, DeleteGroupActivityInfoController, GetGroupActivitiesController, GetGroupActivitiesInfoController, GetGroupActivityInfoController, NotifyGroupActivityController, UpdateGroupActivityInfoController } from "./controllers";

const mysqlRepository = new MySQLRepository();

const createGroupActivityInfoService = new CreateGroupActivityInfoService(mysqlRepository, sendMultipleNotificationService, getTokenService, getGroupByIdService);
const getGroupActivityInfoService = new GetGroupActivityInfoService(mysqlRepository);
const updateGroupActivityInfoService = new UpdateGroupActivityInfoService(mysqlRepository, getTokenService, sendMultipleNotificationService);
const deleteGroupActivityInfoService = new DeleteGroupActivityInfoService(mysqlRepository, sendMultipleNotificationService, getTokenService);

const getGroupActivitiesInfoService = new GetGroupActivitiesInfoService(mysqlRepository);
const getGroupActivitiesService = new GetGroupActivitiesService(mysqlRepository);

const notifyGroupActivityService = new NotifyGroupActivityService(mysqlRepository, getTokenService, sendMultipleNotificationService);

export const createGroupActivityInfoController = new CreateGroupActivityInfoController(createGroupActivityInfoService);
export const getGroupActivityInfoController = new GetGroupActivityInfoController(getGroupActivityInfoService);
export const updateGroupActivityInfoController = new UpdateGroupActivityInfoController(updateGroupActivityInfoService);
export const deleteGroupActivityInfoController = new DeleteGroupActivityInfoController(deleteGroupActivityInfoService);

export const getGroupActivitiesInfoController = new GetGroupActivitiesInfoController(getGroupActivitiesInfoService);
export const getGroupActivitiesController = new GetGroupActivitiesController(getGroupActivitiesService);
export const notifyGroupActivityController = new NotifyGroupActivityController(notifyGroupActivityService);