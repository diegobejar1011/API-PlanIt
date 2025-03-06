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
exports.GetTokenService = void 0;
class GetTokenService {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.dataRepository.getToken(id);
                if (!token) {
                    throw new Error("No existe token para el usuario");
                }
                return {
                    id: id,
                    token: token
                };
            }
            catch (error) {
                console.log(error);
                throw new Error(error.message);
            }
        });
    }
}
exports.GetTokenService = GetTokenService;
