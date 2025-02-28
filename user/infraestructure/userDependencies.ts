// Adapters
import { MySQLRepository } from "./adapters/MySQLRepository";

// Services
import { CreateUserService } from "../application";

// Controllers
import { CreateUserController } from "./controllers";

const mysqlRepository = new MySQLRepository();

const createUserService = new CreateUserService(mysqlRepository);

export const createUserController = new CreateUserController(createUserService);