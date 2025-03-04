
import { UserByToken } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class AddUserByTokenService {
    constructor(private readonly dataRepository: DataRepository) {}
    async run(addUserByToken: UserByToken) {
        try {
            
            await this.dataRepository.addUserByToken(addUserByToken);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}