import { PersonalActivityInfoRes } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class GetPersonalActivityInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(activity_id: number) {
        try {
            const personalActivity = await this.dataRepository.getPersonalActivity(activity_id);

            const personalActivityInfo = await this.dataRepository.getPersonalActivityInfo(activity_id);

            const personalActivityInfoRes: PersonalActivityInfoRes = {
                title: personalActivity.title,
                category: personalActivityInfo.category,
                status: personalActivityInfo.status,
                description: personalActivityInfo.description,
                date: personalActivityInfo.date
            }

            return personalActivityInfoRes;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}