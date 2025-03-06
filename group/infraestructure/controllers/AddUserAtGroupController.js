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
exports.AddUserAtGroupController = void 0;
class AddUserAtGroupController {
    constructor(addUserAtGroupService) {
        this.addUserAtGroupService = addUserAtGroupService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addUserAtGroup = req.body;
                yield this.addUserAtGroupService.run(addUserAtGroup);
                res.status(200).json("El usuario ha sido agregado exitosamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al agregar el usuario al grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.AddUserAtGroupController = AddUserAtGroupController;
