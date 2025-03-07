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
exports.AddUserAtGroupService = void 0;
class AddUserAtGroupService {
    constructor(dataReposiotry, sendNotificationService, getTokenService) {
        this.dataReposiotry = dataReposiotry;
        this.sendNotificationService = sendNotificationService;
        this.getTokenService = getTokenService;
    }
    run(addUserAtGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dataReposiotry.addUserAtGroup(addUserAtGroup);
                const group = yield this.dataReposiotry.getGroupById(addUserAtGroup.group_id);
                const tokenUser = yield this.getTokenService.run(group.user_id);
                yield this.sendNotificationService.run({
                    title: "Has sido a un grupo nuevo",
                    body: `Has sido agregado a ${group.name}`,
                    token: tokenUser.token
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AddUserAtGroupService = AddUserAtGroupService;
