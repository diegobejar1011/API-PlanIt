"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userDependencies_1 = require("./userDependencies");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", userDependencies_1.createUserController.run.bind(userDependencies_1.createUserController));
exports.userRouter.post("/login", userDependencies_1.validateUserController.run.bind(userDependencies_1.validateUserController));
exports.userRouter.post("/token", userDependencies_1.saveTokenController.run.bind(userDependencies_1.saveTokenController));
