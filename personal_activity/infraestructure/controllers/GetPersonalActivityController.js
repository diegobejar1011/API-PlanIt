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
exports.GetPersonalActivityInfoController = void 0;
class GetPersonalActivityInfoController {
    constructor(getPersonalActivityInfoService) {
        this.getPersonalActivityInfoService = getPersonalActivityInfoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const personalActivityInfo = yield this.getPersonalActivityInfoService.run(parseInt(id));
                res.status(200).json(personalActivityInfo);
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al conseguir la información de la actividad",
                    message: error.message
                });
            }
        });
    }
}
exports.GetPersonalActivityInfoController = GetPersonalActivityInfoController;
