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
exports.NotifyGroupActivityService = void 0;
class NotifyGroupActivityService {
    constructor(dataRepository, getTokenService, sendMultipleNotificationService) {
        this.dataRepository = dataRepository;
        this.getTokenService = getTokenService;
        this.sendMultipleNotificationService = sendMultipleNotificationService;
    }
    run(groupActivityId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(groupActivityId);
                let tokens = [];
                const groupActivity = yield this.dataRepository.getGroupActivityInfo(groupActivityId);
                tokens = yield Promise.all(groupActivity.users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    let userToken = yield this.getTokenService.run(user.id);
                    return userToken.token;
                })));
                yield this.sendMultipleNotificationService.run({
                    title: groupActivity.title,
                    body: "Recordatorio de actividad grupal",
                    tokens
                });
            }
            catch (error) {
                console.log(error.message);
                throw new Error(error.message);
            }
        });
    }
}
exports.NotifyGroupActivityService = NotifyGroupActivityService;
