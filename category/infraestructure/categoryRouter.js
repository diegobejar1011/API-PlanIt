"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const categoryDependencies_1 = require("./categoryDependencies");
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.use("/", categoryDependencies_1.getCategoriesController.run.bind(categoryDependencies_1.getCategoriesController));
