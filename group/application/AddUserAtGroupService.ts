import { AddUserAtGroup } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class AddUserAtGroupService {
    constructor(private readonly dataReposiotry: DataRepository) {}

    async run(addUserAtGroup: AddUserAtGroup) {
        try {
            
            await this.dataReposiotry.addUserAtGroup(addUserAtGroup);
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}