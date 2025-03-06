import { db } from "../../../core/data/mysql/application/conn";
import { CreateUserReq, CreateUserRes, SaveTokenReq, User, UserRes } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {

    async confirmedToken(id: number): Promise<number> {
        try {
            

            const query = `SELECT COUNT(*) AS confirmed FROM token_user WHERE user_id = ?`;

            const result: any = await db.execute(query, [id]);

            return result[0][0].confirmed;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getUserById(id: number): Promise<UserRes> {
        try {
            const query = "SELECT id, firstname, lastname FROM user WHERE id = ?";

            const result: any = await db.execute(query, [id]);

            return result[0][0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getToken(id: number): Promise<string> {
        try {
            const query = "SELECT token FROM token_user WHERE user_id = ?";

            const token: any = await db.execute(query, [id]);

            return token[0][0].token;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async saveToken(saveTokenReq: SaveTokenReq): Promise<void> {
        try {
            
            const query = "INSERT INTO token_user (user_id, token) VALUES (?, ?)";

            await db.execute(query, [saveTokenReq.id, saveTokenReq.token]);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

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