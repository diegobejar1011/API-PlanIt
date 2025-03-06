import { AddUserAtGroup, UserByToken, GroupReq, GroupRes, UpdateGroupDto, UserAtGroup, GroupByUserId, GroupUser, Group } from "../entities"


export interface DataRepository {
    createGroup(group: GroupReq): Promise<void>;
    getGroupById(id: number): Promise<GroupRes>;
    updateGroup(updateGroup: UpdateGroupDto, id: number): Promise<void>;
    deleteGroup(id: number): Promise<void>;
    getUsersAtGroup(groupId: number): Promise<[UserAtGroup]>;
    addUserAtGroup(addUserAtGroup: AddUserAtGroup): Promise<void>;
    deleteUserAtGroup(groupUserId: number): Promise<void>;
    addUserByToken(addUserByToken: UserByToken): Promise<void>;
    getGroupsByUserId(userId: number): Promise<[GroupByUserId]>;
    getGroupUser(groupUser: number): Promise<GroupUser>;
    getGroupByToken(token: string): Promise<Group>;
    getGroupByActivity(activityId: number): Promise<Group>;
}