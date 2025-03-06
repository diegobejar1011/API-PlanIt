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
exports.GetPersonalActivityInfoService = void 0;
class GetPersonalActivityInfoService {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    run(activity_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personalActivity = yield this.dataRepository.getPersonalActivity(activity_id);
                const personalActivityInfo = yield this.dataRepository.getPersonalActivityInfo(activity_id);
                const personalActivityInfoRes = {
                    title: personalActivity.title,
                    category: personalActivityInfo.category,
                    status: personalActivityInfo.status,
                    description: personalActivityInfo.description,
                    date: personalActivityInfo.date
                };
                return personalActivityInfoRes;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.GetPersonalActivityInfoService = GetPersonalActivityInfoService;
