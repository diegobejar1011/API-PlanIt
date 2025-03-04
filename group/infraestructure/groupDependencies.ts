import { AddUserAtGroupService, CreateGroupService, DeleteGroupService, DeleteUserAtGroupService, GetGroupByIdService, GetUsersAtGroupService, UpdateGroupService } from "../application";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { UuidRepository } from "./adapters/uuidRepository";
import { AddUserAtGroupController, CreateGroupController, DeleteGroupController, DeleteUserAtGroupController, GetGroupByIdController, GetUsersAtGroupController, UpdateGroupController } from "./controllers";


const mysqlRepository = new MySQLRepository();
const uuidRepository = new UuidRepository();

const createGroupService = new CreateGroupService(mysqlRepository, uuidRepository);
const getGroupByIdService = new GetGroupByIdService(mysqlRepository);
const updateGroupService = new UpdateGroupService(mysqlRepository);
const deleteGroupService = new DeleteGroupService(mysqlRepository);
const addUserAtGroupService = new AddUserAtGroupService(mysqlRepository);
const deleteUserAtGroupService = new DeleteUserAtGroupService(mysqlRepository);
const getUsersAtGroupService = new GetUsersAtGroupService(mysqlRepository);

export const createGroupController = new CreateGroupController(createGroupService);
export const getGroupByIdController = new GetGroupByIdController(getGroupByIdService);
export const updateGroupController = new UpdateGroupController(updateGroupService);
export const deleteGroupController = new DeleteGroupController(deleteGroupService);
export const addUserAtGroupController = new AddUserAtGroupController(addUserAtGroupService);
export const deleteUserAtGroupController = new DeleteUserAtGroupController(deleteUserAtGroupService);
export const getUsersAtGroupController = new GetUsersAtGroupController(getUsersAtGroupService);
