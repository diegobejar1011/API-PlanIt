"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesController = void 0;
const application_1 = require("../application");
const MySQLRepository_1 = require("./adapters/MySQLRepository");
const GetCategoriesController_1 = require("./controllers/GetCategoriesController");
const mysqlRepository = new MySQLRepository_1.MySQLRepository();
const getCategoriesService = new application_1.GetCategoriesService(mysqlRepository);
exports.getCategoriesController = new GetCategoriesController_1.GetCategoriesControllers(getCategoriesService);
