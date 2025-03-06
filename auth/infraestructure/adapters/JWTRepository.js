"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTRepository = void 0;
const SecretKey_1 = require("../../domain/constants/SecretKey");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTRepository {
    validateToken(token) {
        jsonwebtoken_1.default.verify(token, SecretKey_1.JWT_SECRET_KEY, (err, _decodeToken) => {
            if (err) {
                throw new Error(err.message);
            }
        });
    }
    createToken(data) {
        try {
            const token = jsonwebtoken_1.default.sign(data, SecretKey_1.JWT_SECRET_KEY, { expiresIn: "1h" });
            return "Bearer " + token;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.JWTRepository = JWTRepository;
