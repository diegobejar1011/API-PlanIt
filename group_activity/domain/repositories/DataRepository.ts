import { GroupActivity, GroupActivityInfo, GroupActivityInfoReq, GroupActivityInfoRes, UpdateGroupActivity } from "../entities";

export interface DataRepository {
    createGroupActivityInfo(groupActivityInfoReq: GroupActivityInfoReq): Promise<void>;
    getGroupActivityInfo(activityId: number): Promise<GroupActivityInfoRes>;
    getGroupActivitiesInfo(): Promise<[GroupActivityInfo]>;
    updateGroupActivityInfo(updateGroupActivity: UpdateGroupActivity, activityId: number): Promise<void>;
    deleteGroupActivityInfo(activityId: number): Promise<void>;
    getGroupActivities(groupId: number, status: string): Promise<[GroupActivity]>;
}