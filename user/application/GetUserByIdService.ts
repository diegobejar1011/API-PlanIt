import { DataRepository } from "../domain/repositories/DataRepository";

export class GetUserByIdService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(id: number) {
        try {
            
            const user = this.dataRepository.getUserById(id);

            return user;
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}