import { UpdateGroupDto } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class UpdateGroupService {
    constructor(private readonly dataRepository: DataRepository) {}
    async run(updateGroup: UpdateGroupDto, id: number){
        try {

            await this.dataRepository.updateGroup(updateGroup, id);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}