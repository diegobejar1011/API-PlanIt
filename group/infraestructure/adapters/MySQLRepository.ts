import { db } from "../../../core/data/mysql/application/conn";
import { AddUserAtGroup, UserByToken, GroupReq, GroupRes, UpdateGroupDto, UserAtGroup, Group, GroupUser } from "../../domain/entities";
import { GroupByUserId } from "../../domain/entities/GroupByUserId";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {

    async getGroupByActivity(activityId: number): Promise<Group> {
        try {
            const query = 'SELECT g.id, g.user_id, g.name, g.description, g.token FROM group_activity_info AS gai INNER JOIN group_activity AS ga ON gai.id = ga.activity_id INNER JOIN `group` AS g ON ga.group_id = g.id WHERE gai.id = ?';
            
            const result: any = await db.execute(query, [activityId]);

            return result[0][0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getGroupUser(groupUser: number): Promise<GroupUser> {
        try {
            const query = "SELECT id, group_id, user_id FROM group_user WHERE id = ?";

            const result: any = await db.execute(query, [groupUser]);

            return result[0][0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getGroupByToken(token: string): Promise<Group> {
        try {
            
            const query = "SELECT id, user_id, name, description, token FROM `group` WHERE token = ?";

            const result: any = await db.execute(query, [token]);

            return result[0][0];
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getGroupsByUserId(userId: number): Promise<[GroupByUserId]> {
        try {

            const query = "SELECT g.id, g.name FROM group_user AS gu INNER JOIN `group` AS g ON gu.group_id = g.id WHERE gu.user_id = ?";

            const rows: any = await db.execute(query, [userId]);

            return rows[0];
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async addUserByToken(addUserByToken: UserByToken): Promise<void> {
        try {
            const queryToGroupId = "SELECT id FROM `group` WHERE token = ?";

            const result: any  = await db.execute(queryToGroupId, [addUserByToken.token]);

            const queryToAddUserToGroup = "INSERT INTO group_user (user_id, group_id) VALUES (?,?)";

            await db.execute(queryToAddUserToGroup, [addUserByToken.user_id, result[0][0].id]);


        } catch (error: any) {
            throw new Error(error.message);
        }
    }



    async getUsersAtGroup(groupId: number): Promise<[UserAtGroup]> {
        try {
            const query = `SELECT gu.id, user_id, u.firstname, u.lastname 
                                FROM group_user AS gu
                                INNER JOIN user AS u
                                ON gu.user_id = u.id
                                WHERE group_id = ?`;

            const rows: any = await db.execute(query, [groupId]);

            return rows[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async addUserAtGroup(addUserAtGroup: AddUserAtGroup): Promise<void> {
        try {
            const query = "INSERT INTO group_user (user_id, group_id) VALUES (?,?)";

            await db.execute(query,[addUserAtGroup.user_id, addUserAtGroup.group_id]);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async deleteUserAtGroup(userGroupId: number): Promise<void> {
        try {
            const query = "DELETE FROM group_user WHERE id = ?";

            await db.execute(query, [userGroupId]);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateGroup(updateGroup: UpdateGroupDto, id: number): Promise<void> {
        try {
            
            const query = "UPDATE `group` SET name = ?, description = ? WHERE id = ?";

            await db.execute(query, [updateGroup.name, updateGroup.description, id]);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    async deleteGroup(id: number): Promise<void> {
        try {
            const query = "DELETE FROM `group` WHERE id = ?";

            await db.execute(query, [id]);
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async createGroup(group: GroupReq): Promise<void> {
        try {

            await db.beginTransaction();

            const query = "INSERT INTO `group` (user_id, name, description, token) VALUES (?, ?, ?, ?)";

            const result : any = await db.execute(query, [group.user_id, group.name, group.description, group.token]);

            const queryToAddUserToGroup = "INSERT INTO group_user (group_id, user_id) VALUES (?, ?)";

            await db.execute(queryToAddUserToGroup, [result[0].insertId, group.user_id]);

            await db.commit();

        } catch (error: any) {
            
            await db.rollback();

            throw new Error(error.message);
        }
    }

    async getGroupById(id: number): Promise<GroupRes> {
        try {
            
            const query = "SELECT id, user_id, name, description, token FROM `group` WHERE id = ?";

            const result: any = await db.execute(query, [id]);

            return result[0][0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}