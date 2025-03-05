import { DataRepository } from "../domain/repositories/DataRepository";

export class GetGroupsByUserIdService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(userId: number) {
        try {
            
            const groupsByUserId = await this.dataRepository.getGroupsByUserId(userId);

            return groupsByUserId;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}