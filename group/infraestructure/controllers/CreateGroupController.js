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
exports.CreateGroupController = void 0;
class CreateGroupController {
    constructor(createGroupService) {
        this.createGroupService = createGroupService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const group = req.body;
                yield this.createGroupService.run(group);
                res.status(200).json("El grupo se ha creado correctamente");
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al crear el grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.CreateGroupController = CreateGroupController;
