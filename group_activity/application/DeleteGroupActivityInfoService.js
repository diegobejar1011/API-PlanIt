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
exports.DeleteGroupActivityInfoService = void 0;
class DeleteGroupActivityInfoService {
    constructor(dataRepository, sendMultipleNotificationService, getTokenService) {
        this.dataRepository = dataRepository;
        this.sendMultipleNotificationService = sendMultipleNotificationService;
        this.getTokenService = getTokenService;
    }
    run(activityId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tokens = [];
                const groupActivity = yield this.dataRepository.getGroupActivityInfo(activityId);
                yield this.dataRepository.deleteGroupActivityInfo(activityId);
                tokens = yield Promise.all(groupActivity.users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    let userToken = yield this.getTokenService.run(user.id);
                    return userToken.token;
                })));
                yield this.sendMultipleNotificationService.run({
                    title: "Actividad grupal eliminada",
                    body: `La actividad ${groupActivity.title} ha sido eliminada`,
                    tokens
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.DeleteGroupActivityInfoService = DeleteGroupActivityInfoService;
