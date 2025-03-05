"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLRepository = void 0;
const conn_1 = require("../../../core/data/mysql/application/conn");
class MySQLRepository {
    getGroupsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT g.id, g.name FROM group_user AS gu INNER JOIN `group` AS g ON gu.group_id = g.id WHERE gu.user_id = ?";
                const rows = yield conn_1.db.execute(query, [userId]);
                return rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    addUserByToken(addUserByToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryToGroupId = "SELECT id FROM `group` WHERE token = ?";
                const result = yield conn_1.db.execute(queryToGroupId, [addUserByToken.token]);
                const queryToAddUserToGroup = "INSERT INTO group_user (user_id, group_id) VALUES (?,?)";
                yield conn_1.db.execute(queryToAddUserToGroup, [addUserByToken.user_id, result[0][0].id]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getUsersAtGroup(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT gu.id, user_id, u.firstname, u.lastname 
                                FROM group_user AS gu
                                INNER JOIN user AS u
                                ON gu.user_id = u.id
                                WHERE group_id = ?`;
                const rows = yield conn_1.db.execute(query, [groupId]);
                return rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    addUserAtGroup(addUserAtGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO group_user (user_id, group_id) VALUES (?,?)";
                yield conn_1.db.execute(query, [addUserAtGroup.user_id, addUserAtGroup.group_id]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteUserAtGroup(userGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM group_user WHERE id = ?";
                yield conn_1.db.execute(query, [userGroupId]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updateGroup(updateGroup, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "UPDATE `group` SET name = ?, description = ? WHERE id = ?";
                yield conn_1.db.execute(query, [updateGroup.name, updateGroup.description, id]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM `group` WHERE id = ?";
                yield conn_1.db.execute(query, [id]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createGroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO `group` (user_id, name, description, token) VALUES (?, ?, ?, ?)";
                ;
                yield conn_1.db.execute(query, [group.user_id, group.name, group.description, group.token]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getGroupById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, user_id, name, description, token FROM `group` WHERE id = ?";
                const result = yield conn_1.db.execute(query, [id]);
                return result[0][0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.MySQLRepository = MySQLRepository;
