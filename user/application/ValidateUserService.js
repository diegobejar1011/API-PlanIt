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
exports.ValidateUserService = void 0;
class ValidateUserService {
    constructor(dataRepository, encryptRepository, createTokenService) {
        this.dataRepository = dataRepository;
        this.encryptRepository = encryptRepository;
        this.createTokenService = createTokenService;
    }
    run(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.dataRepository.getUserByEmail(email);
                if (!user) {
                    throw new Error("Usuario no encontrado");
                }
                const validated = yield this.encryptRepository.decodePasword(password, user.password);
                if (!validated) {
                    throw new Error("Contraseña incorrectas");
                }
                const token = this.createTokenService.run({ id: user.id });
                return {
                    id: user.id,
                    email: user.email,
                    token: token
                };
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ValidateUserService = ValidateUserService;
