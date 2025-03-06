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
    confirmedToken(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT COUNT(*) AS confirmed FROM token_user WHERE user_id = ?`;
                const result = yield conn_1.db.execute(query, [id]);
                return result[0][0].confirmed;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, firstname, lastname FROM user WHERE id = ?";
                const result = yield conn_1.db.execute(query, [id]);
                return result[0][0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getToken(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT token FROM token_user WHERE user_id = ?";
                const token = yield conn_1.db.execute(query, [id]);
                return token[0][0].token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    saveToken(saveTokenReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO token_user (user_id, token) VALUES (?, ?)";
                yield conn_1.db.execute(query, [saveTokenReq.id, saveTokenReq.token]);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    create(createUserReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
                const result = yield conn_1.db.execute(query, [createUserReq.firstname, createUserReq.lastname, createUserReq.email, createUserReq.password]);
                return { id: result[0].insertId };
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, firstname, lastname, email, password FROM user WHERE email = ?";
                const [rows] = yield conn_1.db.execute(query, [email]);
                return rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.MySQLRepository = MySQLRepository;
