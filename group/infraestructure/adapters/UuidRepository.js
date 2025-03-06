"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidRepository = void 0;
const uuid_1 = require("uuid");
class UuidRepository {
    generateToken() {
        return (0, uuid_1.v4)().replace(/-/g, '').substring(0, 8);
    }
}
exports.UuidRepository = UuidRepository;
