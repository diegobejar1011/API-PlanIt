import { DataRepository } from "../domain/repositories/DataRepository";

export class DeletePersonalActivityService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run(activity_id: number) {
        try {
            
            await this.dataRepository.deletePersonalActivityInfo(activity_id);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}