import { DataRepository } from "../domain/repositories/DataRepository";

export class GetUsersAtGroupService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(groupId: number){
        try {
            const usersAtGroup = await this.dataRepository.getUsersAtGroup(groupId);

            return usersAtGroup;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}