import { CreateUserReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class CreateUserService {
    constructor(private readonly dataRepository: DataRepository) {}

    async execute(createUserReq: CreateUserReq) {
        try {
            const data = await this.dataRepository.create(createUserReq);

            return data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}