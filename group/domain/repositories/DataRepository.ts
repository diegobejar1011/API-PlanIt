import { AddUserAtGroup, UserByToken, GroupReq, GroupRes, UpdateGroupDto, UserAtGroup, GroupByUserId } from "../entities"


export interface DataRepository {
    createGroup(group: GroupReq): Promise<void>;
    getGroupById(id: number): Promise<GroupRes>;
    updateGroup(updateGroup: UpdateGroupDto, id: number): Promise<void>;
    deleteGroup(id: number): Promise<void>;
    getUsersAtGroup(groupId: number): Promise<[UserAtGroup]>;
    addUserAtGroup(addUserAtGroup: AddUserAtGroup): Promise<void>;
    deleteUserAtGroup(add: number): Promise<void>;
    addUserByToken(addUserByToken: UserByToken): Promise<void>;
    getGroupsByUserId(userId: number): Promise<[GroupByUserId]>;
}