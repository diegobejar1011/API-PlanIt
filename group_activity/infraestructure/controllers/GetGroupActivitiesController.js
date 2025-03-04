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
exports.GetGroupActivitiesController = void 0;
class GetGroupActivitiesController {
    constructor(getGroupActivitiesService) {
        this.getGroupActivitiesService = getGroupActivitiesService;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId, status } = req.query;
                if (!groupId) {
                    throw new Error("El id del grupo es requerido");
                }
                else if (!status) {
                    throw new Error("El status de las actividades es requerido");
                }
                const groupActivities = yield this.getGroupActivitiesService.run(parseInt(groupId.toString()), status.toString());
                res.status(200).json(groupActivities);
            }
            catch (error) {
                res.status(500).json({
                    error: "Error al conseguir las actividades del grupo",
                    message: error.message
                });
            }
        });
    }
}
exports.GetGroupActivitiesController = GetGroupActivitiesController;
