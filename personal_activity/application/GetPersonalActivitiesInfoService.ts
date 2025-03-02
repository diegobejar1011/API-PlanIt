import { DataRepository } from "../domain/repositories/DataRepository";

export class GetPersonalActivitiesInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run() {
        try {
            const personalActivitiesInfo = await this.dataRepository.getPersonalActivitiesInfo();

            return personalActivitiesInfo;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}