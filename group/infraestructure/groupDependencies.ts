import { AddUserAtGroupService, AddUserByTokenService, CreateGroupService, DeleteGroupService, DeleteUserAtGroupService, GetGroupByIdService, GetGroupsByUserIdService, GetUsersAtGroupService, UpdateGroupService } from "../application";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { UuidRepository } from "./adapters/UuidRepository";
import { AddUserAtGroupController, AddUserByTokenController, CreateGroupController, DeleteGroupController, DeleteUserAtGroupController, GetGroupByIdController, GetGroupsByUserIdController, GetUsersAtGroupController, UpdateGroupController } from "./controllers";



const mysqlRepository = new MySQLRepository();
const uuidRepository = new UuidRepository();

const createGroupService = new CreateGroupService(mysqlRepository, uuidRepository);
const getGroupByIdService = new GetGroupByIdService(mysqlRepository);
const updateGroupService = new UpdateGroupService(mysqlRepository);
const deleteGroupService = new DeleteGroupService(mysqlRepository);
const addUserAtGroupService = new AddUserAtGroupService(mysqlRepository);
const deleteUserAtGroupService = new DeleteUserAtGroupService(mysqlRepository);
const getUsersAtGroupService = new GetUsersAtGroupService(mysqlRepository);
const addUserByTokenService = new AddUserByTokenService(mysqlRepository);
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
