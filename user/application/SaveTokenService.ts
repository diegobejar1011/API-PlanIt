import { DataRepository } from "../domain/repositories/DataRepository";

export class SaveTokenService{
    constructor(private readonly dataRepository: DataRepository) {}
    async run(id: number, token: string){
        try {
            
            await this.dataRepository.saveToken({id, token});

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}