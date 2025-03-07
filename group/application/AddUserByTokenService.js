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
exports.AddUserByTokenService = void 0;
class AddUserByTokenService {
    constructor(dataRepository, getTokenService, sendNotificationService, getUserByIdService) {
        this.dataRepository = dataRepository;
        this.getTokenService = getTokenService;
        this.sendNotificationService = sendNotificationService;
        this.getUserByIdService = getUserByIdService;
    }
    run(addUserByToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dataRepository.addUserByToken(addUserByToken);
                const group = yield this.dataRepository.getGroupByToken(addUserByToken.token);
                const user = yield this.getUserByIdService.run(addUserByToken.user_id);
                const userToken = yield this.getTokenService.run(group.user_id);
                yield this.sendNotificationService.run({
                    title: "Un nuevo usuario se ha unido a tu grupo",
                    body: `${user.firstname + " " + user.lastname} se ha unido a ${group.name}`,
                    token: userToken.token
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AddUserByTokenService = AddUserByTokenService;
