import { DataRepository } from "../domain/repositories/DataRepository";

export class GetCategoriesService {
    constructor(private readonly dataRepository: DataRepository) {}

    async run() {
        try {
            const categories = await this.dataRepository.getCategories();

            return categories;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}