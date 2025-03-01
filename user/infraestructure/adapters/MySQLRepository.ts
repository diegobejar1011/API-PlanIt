import { db } from "../../../core/data/mysql/application/conn";
import { CreateUserReq, CreateUserRes, User } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {

    async create(createUserReq: CreateUserReq): Promise<CreateUserRes> {
        try {

            const query = "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
            
            const result : any = await db.execute(query, [createUserReq.firstname, createUserReq.lastname, createUserReq.email, createUserReq.password]);

            return { id: result[0].insertId };

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getUserByEmail(email: string): Promise<User> {
        try {
            
            const query = "SELECT id, firstname, lastname, email, password FROM user WHERE email = ?";

            const [rows]: any = await db.execute(query,[email]);

            return rows[0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}