import { CategoryRes } from "../entities";

export interface DataRepository {
    getCategories(): Promise<[CategoryRes]>
}