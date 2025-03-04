import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupActivitiesInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(){
        try {
            const groupActivitiesInfo = await this.dataRepository.getGroupActivitiesInfo();
            return groupActivitiesInfo;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}