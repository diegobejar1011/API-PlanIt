import { DataRepository } from "../domain/repositories/DataRepository";

export class GetPersonalActivitiesService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(user_id: number) {
        try {
            const personalActivities = await this.dataRepository.getPersonalActivities(user_id);

            return personalActivities;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}