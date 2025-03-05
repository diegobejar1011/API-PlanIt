"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenService = exports.createTokenService = void 0;
const application_1 = require("../application");
const JWTRepository_1 = require("./adapters/JWTRepository");
const jwtRepository = new JWTRepository_1.JWTRepository();
exports.createTokenService = new application_1.CreateTokenService(jwtRepository);
exports.verifyTokenService = new application_1.VerifyTokenService(jwtRepository);
