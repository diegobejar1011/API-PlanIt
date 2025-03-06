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
exports.DeleteGroupActivityInfoController = void 0;
class DeleteGroupActivityInfoController {
    constructor(deleteGroupActivityInfoService) {
        this.deleteGroupActivityInfoService = deleteGroupActivityInfoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.deleteGroupActivityInfoService.run(parseInt(id));
                res.status(200).json("La actividad del grupo se ha eliminado correctamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al eliminar la actividad del grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.DeleteGroupActivityInfoController = DeleteGroupActivityInfoController;
