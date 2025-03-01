import { CreateUserReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";
import { EncryptRepository } from "../domain/repositories/EncryptRepository";

export class CreateUserService {
    constructor(private readonly dataRepository: DataRepository, private readonly encryptRepository: EncryptRepository) {}

    async execute(createUserReq: CreateUserReq) {
        try {

            createUserReq.password = await this.encryptRepository.encodePassword(createUserReq.password);

            const data = await this.dataRepository.create(createUserReq);

            return data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}