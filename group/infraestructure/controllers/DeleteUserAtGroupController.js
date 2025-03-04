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
exports.DeleteUserAtGroupController = void 0;
class DeleteUserAtGroupController {
    constructor(deleteUserAtGroupService) {
        this.deleteUserAtGroupService = deleteUserAtGroupService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.deleteUserAtGroupService.run(parseInt(id));
                res.status(200).json("El usuario fue eliminado del grupo exitosamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al eliminar el usuario del grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.DeleteUserAtGroupController = DeleteUserAtGroupController;
