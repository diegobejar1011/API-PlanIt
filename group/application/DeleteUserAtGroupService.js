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
exports.DeleteUserAtGroupService = void 0;
class DeleteUserAtGroupService {
    constructor(dataRepository, sendNotificationService, getTokenService) {
        this.dataRepository = dataRepository;
        this.sendNotificationService = sendNotificationService;
        this.getTokenService = getTokenService;
    }
    run(userGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groupUser = yield this.dataRepository.getGroupUser(userGroupId);
                const group = yield this.dataRepository.getGroupByActivity(groupUser.group_id);
                yield this.dataRepository.deleteUserAtGroup(userGroupId);
                const tokenUser = yield this.getTokenService.run(groupUser.user_id);
                yield this.sendNotificationService.run({
                    title: `Has sido eliminado de ${group.name}`,
                    body: "El lider te ha eliminado del grupo ",
                    token: tokenUser.token
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.DeleteUserAtGroupService = DeleteUserAtGroupService;
