"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTokenController = exports.validateUserController = exports.createUserController = exports.getTokenService = void 0;
// Adapters
const MySQLRepository_1 = require("./adapters/MySQLRepository");
// Services
const application_1 = require("../application");
// Controllers
const controllers_1 = require("./controllers");
const BcryptRepository_1 = require("./adapters/BcryptRepository");
const GetTokenService_1 = require("../application/GetTokenService");
const authDependencies_1 = require("../../auth/infraestructure/authDependencies");
const mysqlRepository = new MySQLRepository_1.MySQLRepository();
const bcryptRepository = new BcryptRepository_1.BcryptRepository();
const createUserService = new application_1.CreateUserService(mysqlRepository, bcryptRepository);
const validateUserService = new application_1.ValidateUserService(mysqlRepository, bcryptRepository, authDependencies_1.createTokenService);
const saveTokenService = new application_1.SaveTokenService(mysqlRepository);
exports.getTokenService = new GetTokenService_1.GetTokenService(mysqlRepository);
exports.createUserController = new controllers_1.CreateUserController(createUserService);
exports.validateUserController = new controllers_1.ValidateUserController(validateUserService);
exports.saveTokenController = new controllers_1.SaveTokenController(saveTokenService);
