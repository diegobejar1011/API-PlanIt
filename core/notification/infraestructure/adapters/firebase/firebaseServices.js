"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMultipleNotificationService = exports.sendNotificationService = void 0;
const application_1 = require("../../../application");
const FirebaseRepository_1 = require("./FirebaseRepository");
const firebaseRepository = new FirebaseRepository_1.FirebaseRepository();
exports.sendNotificationService = new application_1.SendNotificationService(firebaseRepository);
exports.sendMultipleNotificationService = new application_1.SendMultipleNotificationService(firebaseRepository);
