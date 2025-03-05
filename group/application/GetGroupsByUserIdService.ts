import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupsByUserIdService {
    constructor(private readonly dataRepository: DataRepository) {}
    async run(userId: number) {
        try {
            
            const groups = await this.dataRepository.getGroupsByUserId(userId);

            return groups;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}