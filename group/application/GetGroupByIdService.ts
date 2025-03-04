import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupByIdService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(id: number){
        try {
            const group = await this.dataRepository.getGroupById(id);

            return group;
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}