"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseRepository = void 0;
const config_1 = require("./domain/config");
class FirebaseRepository {
    sendNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = {
                    data: {
                        title: notification.title,
                        body: notification.body,
                        image: notification.image || ""
                    },
                    token: notification.token
                };
                yield config_1.app.messaging().send(message);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    sendMultipleNotification(multipleNotification) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = {
                    data: {
                        title: multipleNotification.title,
                        body: multipleNotification.body
                    },
                    tokens: multipleNotification.tokens
                };
                yield config_1.app.messaging().sendEachForMulticast(message);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.FirebaseRepository = FirebaseRepository;
