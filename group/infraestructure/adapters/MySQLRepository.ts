import { db } from "../../../core/data/mysql/application/conn";
import { AddUserAtGroup, GroupReq, GroupRes, UpdateGroupDto, UserAtGroup } from "../../domain/entities";
import { DataRepository } from "../../domain/repositories/DataRepository";

export class MySQLRepository implements DataRepository {

    async getUsersAtGroup(groupId: number): Promise<[UserAtGroup]> {
        try {
            const query = "SELECT id, user_id FROM group_user WHERE group_id = ?";

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
            const query = "INSERT INTO `group` (user_id, name, description, token) VALUES (?, ?, ?, ?)";
            ;

            await db.execute(query, [group.user_id, group.name, group.description, group.token]);

        } catch (error: any) {
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