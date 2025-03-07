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
exports.CreateGroupActivityInfoController = void 0;
class CreateGroupActivityInfoController {
    constructor(createGroupActivityInfoService) {
        this.createGroupActivityInfoService = createGroupActivityInfoService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groupActivityInfo = req.body;
                yield this.createGroupActivityInfoService.run(groupActivityInfo);
                res.status(200).json("La actividad del grupo se creo correctamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al crear una actividad para el grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.CreateGroupActivityInfoController = CreateGroupActivityInfoController;
