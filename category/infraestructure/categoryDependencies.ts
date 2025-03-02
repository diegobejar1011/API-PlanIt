
import { GetCategoriesService } from "../application";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { GetCategoriesControllers } from "./controllers/GetCategoriesController";

const mysqlRepository = new MySQLRepository();

const getCategoriesService = new GetCategoriesService(mysqlRepository);

export const getCategoriesController = new GetCategoriesControllers(getCategoriesService);