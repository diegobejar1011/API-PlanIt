import { sendMultipleNotificationService, sendNotificationService } from "../../core/notification/infraestructure/adapters/firebase/firebaseServices";
import { getTokenService, getUserByIdService } from "../../user/infraestructure/userDependencies";
import { AddUserAtGroupService, CreateGroupService, DeleteGroupService, DeleteUserAtGroupService, GetGroupByIdService, GetGroupsByUserIdService, GetUsersAtGroupService, UpdateGroupService } from "../application";
import { AddUserByTokenService } from "../application/AddUserByTokenService";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { UuidRepository } from "./adapters/UuidRepository";
import { AddUserAtGroupController, AddUserByTokenController, CreateGroupController, DeleteGroupController, DeleteUserAtGroupController, GetGroupByIdController, GetGroupsByUserIdController, GetUsersAtGroupController, UpdateGroupController } from "./controllers";


const mysqlRepository = new MySQLRepository();
const uuidRepository = new UuidRepository();

const createGroupService = new CreateGroupService(mysqlRepository, uuidRepository);
export const getGroupByIdService = new GetGroupByIdService(mysqlRepository);
const updateGroupService = new UpdateGroupService(mysqlRepository);
const deleteGroupService = new DeleteGroupService(mysqlRepository, getTokenService, sendMultipleNotificationService);
const addUserAtGroupService = new AddUserAtGroupService(mysqlRepository, sendNotificationService, getTokenService);
const deleteUserAtGroupService = new DeleteUserAtGroupService(mysqlRepository, sendNotificationService, getTokenService);
const getUsersAtGroupService = new GetUsersAtGroupService(mysqlRepository);
const addUserByTokenService = new AddUserByTokenService(mysqlRepository, getTokenService, sendNotificationService, getUserByIdService);
const getGroupsByUserIdService = new GetGroupsByUserIdService(mysqlRepository);

export const createGroupController = new CreateGroupController(createGroupService);
export const getGroupByIdController = new GetGroupByIdController(getGroupByIdService);
export const updateGroupController = new UpdateGroupController(updateGroupService);
export const deleteGroupController = new DeleteGroupController(deleteGroupService);
export const addUserAtGroupController = new AddUserAtGroupController(addUserAtGroupService);
export const deleteUserAtGroupController = new DeleteUserAtGroupController(deleteUserAtGroupService);
export const getUsersAtGroupController = new GetUsersAtGroupController(getUsersAtGroupService);
export const addUserAtGroupByTokenController = new AddUserByTokenController(addUserByTokenService);
export const getGroupsByUserIdController = new GetGroupsByUserIdController(getGroupsByUserIdService);
