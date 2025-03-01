// Adapters
import { MySQLRepository } from "./adapters/MySQLRepository";

// Services
import { CreateUserService, ValidateUserService } from "../application";

// Controllers
import { CreateUserController, ValidateUserController } from "./controllers";
import { BcryptRepository } from "./adapters/BcryptRepository";
import { createTokenService } from "../../auth/infraestructure/AuthDependencies";

const mysqlRepository = new MySQLRepository();
const bcryptRepository = new BcryptRepository();

const createUserService = new CreateUserService(mysqlRepository, bcryptRepository);
const validateUserService = new ValidateUserService(mysqlRepository, bcryptRepository, createTokenService);

export const createUserController = new CreateUserController(createUserService);
export const validateUserController = new ValidateUserController(validateUserService);