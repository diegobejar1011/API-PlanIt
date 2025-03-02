import { PersonalActivity, PersonalActivityInfo, PersonalActivityInfoReq, PersonalActivityInfoRes,PersonalActivityRes } from "../entities";

export interface DataRepository {
    getPersonalActivities(user_id: number): Promise<[PersonalActivityRes]>
    getPersonalActivitiesInfo(): Promise<[PersonalActivityInfoRes]>

    getPersonalActivity(activity_id: number): Promise<PersonalActivity>

    createPersonalActivity(personalActivityInfo: PersonalActivityInfoReq): Promise<void>
    updatePersonalActivity(activity_id: number, personalActivityInfo: PersonalActivityInfoReq): Promise<void>

    getPersonalActivityInfo(activity_id: number): Promise<PersonalActivityInfo>
    deletePersonalActivityInfo(activity_id: number): Promise<void>
}