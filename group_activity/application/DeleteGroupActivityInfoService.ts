import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteGroupActivityInfoService {
    constructor(private readonly dataRepository: DataRepository) {}
    async run(activityId: number) {
        try {
            await this.dataRepository.deleteGroupActivityInfo(activityId);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}