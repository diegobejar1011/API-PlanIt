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
exports.DeleteGroupService = void 0;
class DeleteGroupService {
    constructor(dataRepository, getTokenService, sendMultipleNotificationService) {
        this.dataRepository = dataRepository;
        this.getTokenService = getTokenService;
        this.sendMultipleNotificationService = sendMultipleNotificationService;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tokens = [];
                const group = yield this.dataRepository.getGroupById(id);
                console.log(group);
                const users = yield this.dataRepository.getUsersAtGroup(id);
                console.log(users);
                yield this.dataRepository.deleteGroup(id);
                tokens = yield Promise.all(users.map((user) => __awaiter(this, void 0, void 0, function* () {
                    let userToken = yield this.getTokenService.run(user.user_id);
                    return userToken.token;
                })));
                console.log(tokens);
                yield this.sendMultipleNotificationService.run({
                    title: `El grupo ${group.name} ha sido eliminado`,
                    body: "Uno de tus grupos ha sido eliminado por el lider",
                    tokens
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.DeleteGroupService = DeleteGroupService;
