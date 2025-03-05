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
exports.UpdateGroupActivityInfoController = void 0;
class UpdateGroupActivityInfoController {
    constructor(updateGroupActivityInfoService) {
        this.updateGroupActivityInfoService = updateGroupActivityInfoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updateGroupActivityInfo = req.body;
                yield this.updateGroupActivityInfoService.run(updateGroupActivityInfo, parseInt(id));
                res.status(200).json("La actividad del grupo se actualizo correctamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al actualizar la actividad del grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.UpdateGroupActivityInfoController = UpdateGroupActivityInfoController;
