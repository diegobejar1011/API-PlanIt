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
exports.UpdatePersonalActivityController = void 0;
class UpdatePersonalActivityController {
    constructor(updatePersonalActivityService) {
        this.updatePersonalActivityService = updatePersonalActivityService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const personalActivityInfoReq = req.body;
                yield this.updatePersonalActivityService.run(parseInt(id), personalActivityInfoReq);
                res.status(200).json("La actividad ha sido actualizada correctamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al actualizar la actividad del usuario",
                    message: error.message
                });
            }
        });
    }
}
exports.UpdatePersonalActivityController = UpdatePersonalActivityController;
