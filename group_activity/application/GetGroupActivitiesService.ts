import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupActivitiesService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(groupId: number, status: string) {
        try {
            
            const groupActivities = await this.dataRepository.getGroupActivities(groupId, status);

            return groupActivities;
            
        } catch (error: any) {
            throw new Error(error);
        }
    }
}