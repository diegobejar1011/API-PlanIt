import { GroupActivityInfoReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class CreateGroupActivityInfoService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(groupGroupActivityInfo: GroupActivityInfoReq){
        try {
            await this.dataRepository.createGroupActivityInfo(groupGroupActivityInfo);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}