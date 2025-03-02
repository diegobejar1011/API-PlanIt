import { db } from "../../../core/data/mysql/application/conn";
import { CategoryRes } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {
    
    async getCategories(): Promise<[CategoryRes]> {
       try {
        
        const query = "SELECT id, name FROM category";

        const [rows]: any = await db.execute(query);

        return rows;
        
       } catch (error: any) {
            throw new Error(error.message);
       }
    }

}