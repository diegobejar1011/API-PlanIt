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
    getGroupActivities(groupId, status) {
        return __awaiter(this, void 0, void 0, function* () {
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
                            GROUP BY gai.id, ga.title;`;
                const rows = yield conn_1.db.execute(query, [groupId, status]);
                return rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createGroupActivityInfo(groupActivityInfoReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.db.beginTransaction();
                const queryToGroupActivityInfo = "INSERT INTO group_activity_info (category_id, status, description, date_to) VALUES (?, ?, ?, ?)";
                const result = yield conn_1.db.execute(queryToGroupActivityInfo, [groupActivityInfoReq.category_id, groupActivityInfoReq.status, groupActivityInfoReq.description, groupActivityInfoReq.date_to]);
                const queryToGroupActivity = "INSERT INTO group_activity (group_id, activity_id, title) VALUES (?, ?, ?)";
                yield conn_1.db.execute(queryToGroupActivity, [groupActivityInfoReq.group_id, result[0].insertId, groupActivityInfoReq.title]);
                const queryToAssignedUserToGroupActivity = "INSERT INTO assigned_group_activity (user_id, activity_id) VALUES (?,?)";
                groupActivityInfoReq.users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    yield conn_1.db.execute(queryToAssignedUserToGroupActivity, [user, result[0].insertId]);
                }));
                yield conn_1.db.commit();
            }
            catch (error) {
                yield conn_1.db.rollback();
                throw new Error(error.message);
            }
        });
    }
    getGroupActivityInfo(activityId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryToGroupActivityInfo = `SELECT gai.id, ga.title, c.name AS category, gai.status, gai.description, gai.date_to 
                            FROM group_activity_info AS gai
                            INNER JOIN group_activity AS ga
                            ON gai.id = ga.activity_id
                            INNER JOIN category AS c
                            ON gai.category_id = c.id
                            WHERE gai.id = ?;`;
                const resultToGroupActivity = yield conn_1.db.execute(queryToGroupActivityInfo, [activityId]);
                const queryToUsersAtGroupActivity = `SELECT u.id, u.firstname, u.lastname 
                                                    FROM assigned_group_activity AS aga
                                                    INNER JOIN user AS u
                                                    ON aga.user_id = u.id
                                                    WHERE activity_id = ?;`;
                const rows = yield conn_1.db.execute(queryToUsersAtGroupActivity, [activityId]);
                return Object.assign(Object.assign({}, resultToGroupActivity[0][0]), { users: rows[0] });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getGroupActivitiesInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT id, date_to FROM group_activity_info;`;
                const rows = yield conn_1.db.execute(query);
                return rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updateGroupActivityInfo(updateGroupActivity, activityId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.db.beginTransaction();
                const queryToGroupActivityInfo = "UPDATE group_activity_info SET category_id = ?, status = ?, description = ?, date_to = ? WHERE id = ?";
                yield conn_1.db.execute(queryToGroupActivityInfo, [updateGroupActivity.category_id, updateGroupActivity.status, updateGroupActivity.description, updateGroupActivity.date_to, activityId]);
                const queryToGroupActivity = "UPDATE group_activity SET title = ? WHERE activity_id = ?";
                yield conn_1.db.execute(queryToGroupActivity, [updateGroupActivity.title, activityId]);
                const queryToDeleteUsersAtAssigment = "DELETE FROM assigned_group_activity WHERE activity_id = ?";
                yield conn_1.db.execute(queryToDeleteUsersAtAssigment, [activityId]);
                const queryToAssignedUserToGroupActivity = "INSERT INTO assigned_group_activity (user_id, activity_id) VALUES (?,?)";
                updateGroupActivity.users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    yield conn_1.db.execute(queryToAssignedUserToGroupActivity, [user, activityId]);
                }));
                yield conn_1.db.commit();
            }
            catch (error) {
                yield conn_1.db.rollback();
                throw new Error(error.message);
            }
        });
    }
    deleteGroupActivityInfo(activityId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM group_activity_info WHERE id = ?";
                yield conn_1.db.execute(query, [activityId]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.MySQLRepository = MySQLRepository;
