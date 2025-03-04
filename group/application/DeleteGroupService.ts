import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteGroupService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(id: number){
        try {
            
            await this.dataRepository.deleteGroup(id);
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}