import { PersonalActivityInfoReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class UpdatePersonalActivityService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(activity_id: number, personalActivityInfoReq: PersonalActivityInfoReq) {
        try {
            
            await this.dataRepository.updatePersonalActivity(activity_id, personalActivityInfoReq);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}