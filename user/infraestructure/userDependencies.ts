// Adapters
import { MySQLRepository } from "./adapters/MySQLRepository";

// Services
import { CreateUserService, SaveTokenService, ValidateUserService } from "../application";

// Controllers
import { CreateUserController, SaveTokenController, ValidateUserController } from "./controllers";
import { BcryptRepository } from "./adapters/BcryptRepository";
import { createTokenService } from "../../auth/infraestructure/AuthDependencies";
import { GetTokenService } from "../application/GetTokenService";

const mysqlRepository = new MySQLRepository();
const bcryptRepository = new BcryptRepository();

const createUserService = new CreateUserService(mysqlRepository, bcryptRepository);
const validateUserService = new ValidateUserService(mysqlRepository, bcryptRepository, createTokenService);
const saveTokenService = new SaveTokenService(mysqlRepository);

export const getTokenService = new GetTokenService(mysqlRepository);

export const createUserController = new CreateUserController(createUserService);
export const validateUserController = new ValidateUserController(validateUserService);
export const saveTokenController = new SaveTokenController(saveTokenService);