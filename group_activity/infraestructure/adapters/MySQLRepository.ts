import { db } from "../../../core/data/mysql/application/conn";
import { GroupActivity, GroupActivityInfo, GroupActivityInfoReq, GroupActivityInfoRes } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {

    async getGroupActivities(groupId: number, status: string): Promise<[GroupActivity]> {
        try {
            
            const query = `SELECT 
                                gai.id AS id, 
                                ga.title, 
                                GROUP_CONCAT(CONCAT(u.firstname, ' ', u.lastname) SEPARATOR ', ') AS users
                            FROM group_activity AS ga
                            INNER JOIN group_activity_info AS gai ON ga.activity_id = gai.id
                            LEFT JOIN assigned_group_activity AS aga ON gai.id = aga.activity_id
                            LEFT JOIN user AS u ON aga.user_id = u.id
                            WHERE ga.group_id = ? AND gai.status = ?
                            GROUP BY gai.id, ga.title;`
            
            const rows: any = await db.execute(query, [groupId, status]);

            return rows[0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    async createGroupActivityInfo(groupActivityInfoReq: GroupActivityInfoReq): Promise<void> {
        try {
            await db.beginTransaction();

            const queryToGroupActivityInfo = "INSERT INTO group_activity_info (category_id, status, description, date_to) VALUES (?, ?, ?, ?)";

            const result : any = await db.execute(queryToGroupActivityInfo, [groupActivityInfoReq.category_id, groupActivityInfoReq.status, groupActivityInfoReq.description, groupActivityInfoReq.date_to]);

            const queryToGroupActivity = "INSERT INTO group_activity (group_id, activity_id, title) VALUES (?, ?, ?)";

            await db.execute(queryToGroupActivity, [groupActivityInfoReq.group_id, result[0].insertId, groupActivityInfoReq.title]);
            const queryToAssignedUserToGroupActivity = "INSERT INTO assigned_group_activity (user_id, activity_id) VALUES (?,?)";

            groupActivityInfoReq.users.map(async (user) => {
                await db.execute(queryToAssignedUserToGroupActivity, [user, result[0].insertId]);
            });

            await db.commit();

        } catch (error: any) {

            await db.rollback(); 

            throw new Error(error.message);
        }
    }

    async getGroupActivityInfo(activityId: number): Promise<GroupActivityInfoRes> {
        try {
            const queryToGroupActivityInfo = `SELECT gai.id, ga.title, c.name AS category, gai.status, gai.description, gai.date_to 
                            FROM group_activity_info AS gai
                            INNER JOIN group_activity AS ga
                            ON gai.id = ga.activity_id
                            INNER JOIN category AS c
                            ON gai.category_id = c.id
                            WHERE gai.id = ?;`
            
            const resultToGroupActivity: any = await db.execute(queryToGroupActivityInfo, [activityId]);

            const queryToUsersAtGroupActivity = `SELECT u.id, u.firstname, u.lastname 
                                                    FROM assigned_group_activity AS aga
                                                    INNER JOIN user AS u
                                                    ON aga.user_id = u.id
                                                    WHERE activity_id = ?;`
            
            const rows : any = await db.execute(queryToUsersAtGroupActivity, [activityId]);

            return {
                ...resultToGroupActivity[0][0],
                users: rows[0]               
            }

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getGroupActivitiesInfo(): Promise<[GroupActivityInfo]> {
        try {
            const query = `SELECT id, date_to FROM group_activity_info;`;

            const rows: any = await db.execute(query);  

            return rows[0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateGroupActivityInfo(updateGroupActivity: GroupActivityInfoReq, activityId: number): Promise<void> {
        try {
            await db.beginTransaction();

            const queryToGroupActivityInfo = "UPDATE group_activity_info SET category_id = ?, status = ?, description = ?, date_to = ? WHERE id = ?";

            await db.execute(queryToGroupActivityInfo, [updateGroupActivity.category_id, updateGroupActivity.status, updateGroupActivity.description, updateGroupActivity.date_to, activityId]);

            const queryToGroupActivity = "UPDATE group_activity SET title = ? WHERE activity_id = ?";

            await db.execute(queryToGroupActivity, [updateGroupActivity.title, activityId]);

            const queryToDeleteUsersAtAssigment = "DELETE FROM assigned_group_activity WHERE activity_id = ?";

            await db.execute(queryToDeleteUsersAtAssigment, [activityId]);

            const queryToAssignedUserToGroupActivity = "INSERT INTO assigned_group_activity (user_id, activity_id) VALUES (?,?)";

            updateGroupActivity.users.map(async (user) => {
                await db.execute(queryToAssignedUserToGroupActivity, [user, activityId]);
            });

            await db.commit();
            
        } catch (error: any) {

            await db.rollback();

            throw new Error(error.message);
        }
    }

    async deleteGroupActivityInfo(activityId: number): Promise<void> {
        try {
            const query = "DELETE FROM group_activity_info WHERE id = ?";

            await db.execute(query, [activityId]);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}