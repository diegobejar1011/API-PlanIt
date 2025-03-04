import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteUserAtGroupService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(userGroupid: number) {
        try {
            await this.dataRepository.deleteUserAtGroup(userGroupid);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}