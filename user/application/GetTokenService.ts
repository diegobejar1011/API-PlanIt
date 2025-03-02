import { DataRepository } from "../domain/repositories/DataRepository";

export class GetTokenService {
    constructor(private readonly dataRepository: DataRepository){}

    async run(id: number) {
        try {

            const token = await this.dataRepository.getToken(id);

            if(!token) {
                throw new Error("No existe token para el usuario");
            }

            return {
                id: id,
                token: token
            }

        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
        }
    }
}