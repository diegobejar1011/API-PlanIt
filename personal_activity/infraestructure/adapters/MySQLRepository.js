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
    getPersonalActivitiesInfo() {
        return __awaiter(this, void 0, void 0, function* () {
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
                const [rows] = yield conn_1.db.execute(query);
                return rows;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPersonalActivities(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT activity_id, title FROM personal_activity WHERE user_id = ?";
                const [rows] = yield conn_1.db.execute(query, [user_id]);
                return rows;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPersonalActivity(activity_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, activity_id, user_id, title FROM personal_activity WHERE activity_id = ?";
                const result = yield conn_1.db.execute(query, [activity_id]);
                return result[0][0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createPersonalActivity(personalActivityInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.db.beginTransaction();
                const queryPersonalActivityInfo = "INSERT INTO personal_activity_info (category_id, status, description, date_to) VALUES (?, ?, ?, ?)";
                const result = yield conn_1.db.execute(queryPersonalActivityInfo, [personalActivityInfo.category_id, personalActivityInfo.status, personalActivityInfo.description, personalActivityInfo.date]);
                const queryPersonalActivity = "INSERT INTO personal_activity (activity_id, user_id, title) VALUES (?, ?, ?)";
                yield conn_1.db.execute(queryPersonalActivity, [result[0].insertId, personalActivityInfo.user_id, personalActivityInfo.title]);
                yield conn_1.db.commit();
            }
            catch (error) {
                yield conn_1.db.rollback();
                throw new Error(error.message);
            }
        });
    }
    updatePersonalActivity(activity_id, personalActivityInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.db.beginTransaction();
                const queryPersonalActivity = "UPDATE personal_activity_info SET category_id = ?, status = ?, description = ?, date_to = ? WHERE id = ?";
                yield conn_1.db.execute(queryPersonalActivity, [personalActivityInfo.category_id, personalActivityInfo.status, personalActivityInfo.description, personalActivityInfo.date, activity_id]);
                const queryPersonalActivityInfo = "UPDATE personal_activity SET title = ? WHERE activity_id = ?";
                yield conn_1.db.execute(queryPersonalActivityInfo, [personalActivityInfo.title, activity_id]);
                yield conn_1.db.commit();
            }
            catch (error) {
                yield conn_1.db.rollback();
                throw new Error(error.message);
            }
        });
    }
    getPersonalActivityInfo(activity_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT pai.id, c.name as category, pai.status, pai.description, pai.date_to AS date
                            FROM personal_activity_info as pai 
                            INNER JOIN category AS c 
                            ON pai.Category_Id = c.id
                            WHERE pai.id = ?`;
                const result = yield conn_1.db.execute(query, [activity_id]);
                return result[0][0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deletePersonalActivityInfo(activity_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM personal_activity_info WHERE id = ?";
                yield conn_1.db.execute(query, [activity_id]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.MySQLRepository = MySQLRepository;
