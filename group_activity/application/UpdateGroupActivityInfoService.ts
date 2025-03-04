import { GroupActivityInfoReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class UpdateGroupActivityInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(updateGroupActivity: GroupActivityInfoReq, activityId: number){
        try {
            await this.dataRepository.updateGroupActivityInfo(updateGroupActivity, activityId);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}