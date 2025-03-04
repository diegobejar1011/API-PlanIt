import { db } from "../../../core/data/mysql/application/conn";
import { PersonalActivityRes, PersonalActivity, PersonalActivityInfo, PersonalActivityInfoReq, PersonalActivityInfoRes } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository{

    async getPersonalActivitiesInfo(): Promise<[PersonalActivityInfoRes]> {
        try {
            const query = `SELECT pa.title, c.name, pai.date_to, u.firstname, tu.token
                            FROM personal_activity_info as pai
                            INNER JOIN category as c
                            ON pai.category_id = c.id
                            INNER JOIN personal_activity as pa
                            ON pai.id = pa.activity_id
                            INNER JOIN user as u 
                            ON pa.user_id = u.id
                            INNER JOIN token_user as tu
                            ON u.id = tu.user_id`;

            const [rows]: any = await db.execute(query);

            return rows;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getPersonalActivities(user_id: number): Promise<[PersonalActivityRes]> {
        try {

            const query = "SELECT activity_id, title FROM personal_activity WHERE user_id = ?";

            const [rows]: any = await db.execute(query, [user_id]);

            return rows;
        } catch(error: any) {
            throw new Error(error.message);
        }
    }

    async getPersonalActivity(activity_id: number): Promise<PersonalActivity> {
        try {
        
            const query = "SELECT id, activity_id, user_id, title FROM personal_activity WHERE activity_id = ?";
            
            const result: any = await db.execute(query, [activity_id]);

            return result[0][0];
        } catch(error: any) {
            throw new Error(error.message);
        }
    }

    async createPersonalActivity(personalActivityInfo: PersonalActivityInfoReq): Promise<void> {
        try {

            await db.beginTransaction();

            const queryPersonalActivityInfo = "INSERT INTO personal_activity_info (category_id, status, description, date_to) VALUES (?, ?, ?, ?)";

            const result : any = await db.execute(queryPersonalActivityInfo, [personalActivityInfo.category_id, personalActivityInfo.status, personalActivityInfo.description, personalActivityInfo.date]);

            const queryPersonalActivity = "INSERT INTO personal_activity (activity_id, user_id, title) VALUES (?, ?, ?)";

            await db.execute(queryPersonalActivity, [result[0].insertId, personalActivityInfo.user_id, personalActivityInfo.title]);

            await db.commit()

        } catch(error: any) {

            await db.rollback(); 

            throw new Error(error.message);
        }
    }

    async updatePersonalActivity(activity_id: number, personalActivityInfo: PersonalActivityInfoReq): Promise<void> {
        try {
            await db.beginTransaction();

            const queryPersonalActivity = "UPDATE personal_activity_info SET category_id = ?, status = ?, description = ?, date_to = ? WHERE id = ?";

            await db.execute(queryPersonalActivity, [personalActivityInfo.category_id, personalActivityInfo.status, personalActivityInfo.description, personalActivityInfo.date, activity_id]);

            const queryPersonalActivityInfo = "UPDATE personal_activity SET title = ? WHERE activity_id = ?";

            await db.execute(queryPersonalActivityInfo, [personalActivityInfo.title, activity_id]);

            await db.commit();

        } catch(error: any) {
            await db.rollback();
            
            throw new Error(error.message);
        }
    }

    async getPersonalActivityInfo(activity_id: number): Promise<PersonalActivityInfo> {
        try {

            const query = `SELECT pai.id, c.name as category, pai.status, pai.description, pai.date_to 
                            FROM personal_activity_info as pai 
                            INNER JOIN category AS c 
                            ON pai.Category_Id = c.id
                            WHERE pai.id = ?`;

            const result: any = await db.execute(query, [activity_id]);

            return result[0][0];

        } catch(error: any) {
            throw new Error(error.message);
        }
    }
    
    async deletePersonalActivityInfo(activity_id: number): Promise<void> {
        try {

            const query = "DELETE FROM personal_activity_info WHERE id = ?";

            await db.execute(query, [activity_id]);

        } catch(error: any) {
            throw new Error(error.message);
        }
    }

}