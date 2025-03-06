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
exports.CreateGroupActivityInfoService = void 0;
class CreateGroupActivityInfoService {
    constructor(dataRepository, sendMultipleNotificationService, getTokenService, getGroupByIdService) {
        this.dataRepository = dataRepository;
        this.sendMultipleNotificationService = sendMultipleNotificationService;
        this.getTokenService = getTokenService;
        this.getGroupByIdService = getGroupByIdService;
    }
    run(groupActivityInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tokens = [];
                const group = yield this.getGroupByIdService.run(groupActivityInfo.group_id);
                yield this.dataRepository.createGroupActivityInfo(groupActivityInfo);
                tokens = yield Promise.all(groupActivityInfo.users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    let userToken = yield this.getTokenService.run(user);
                    return userToken.token;
                })));
                yield this.sendMultipleNotificationService.run({
                    title: `Nueva actividad grupal en ${group.name}`,
                    body: `Actividad nueva: ${groupActivityInfo.title}`,
                    tokens
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CreateGroupActivityInfoService = CreateGroupActivityInfoService;
