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
exports.SaveTokenController = void 0;
class SaveTokenController {
    constructor(saveTokenService) {
        this.saveTokenService = saveTokenService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, token } = req.body;
                this.saveTokenService.run(id, token);
                res.status(200).json('Token de usuario guardado correctamente');
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al guardar el token del usuario",
                    message: error.message
                });
            }
        });
    }
}
exports.SaveTokenController = SaveTokenController;
