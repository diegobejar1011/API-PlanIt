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
exports.SaveTokenService = void 0;
class SaveTokenService {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    run(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const confirmedToken = yield this.dataRepository.confirmedToken(id);
                console.log(confirmedToken);
                if (confirmedToken < 0) {
                    console.log("Ya tiene token");
                    yield this.dataRepository.saveToken({ id, token });
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.SaveTokenService = SaveTokenService;
