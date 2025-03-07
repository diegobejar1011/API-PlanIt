import { DataRepository } from "../domain/repositories/DataRepository";

export class SaveTokenService{
    constructor(private readonly dataRepository: DataRepository) {}
    async run(id: number, token: string){
        try {
            
            const confirmedToken = await this.dataRepository.confirmedToken(id);

            console.log(confirmedToken);

            if(confirmedToken <= 0) {
                console.log("Ya tiene token");
               await this.dataRepository.saveToken({id, token});
            }

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}