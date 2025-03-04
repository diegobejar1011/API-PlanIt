import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupActivityInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(activityId: number){
        try {
            const groupActivityInfo = await this.dataRepository.getGroupActivityInfo(activityId);
            return groupActivityInfo;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}