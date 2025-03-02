import { PersonalActivityInfoReq, PersonalActivityReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class CreatePersonalActivityService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(personalActivityInfoReq: PersonalActivityInfoReq){
        try {

            await this.dataRepository.createPersonalActivity(personalActivityInfoReq);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}