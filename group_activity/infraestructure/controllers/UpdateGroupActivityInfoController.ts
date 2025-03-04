import { Request, Response } from "express";
import { UpdateGroupActivityInfoService } from "../../application";

export class UpdateGroupActivityInfoController {
    constructor(private readonly updateGroupActivityInfoService: UpdateGroupActivityInfoService) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updateGroupActivityInfo = req.body;

            await this.updateGroupActivityInfoService.run(updateGroupActivityInfo, parseInt(id));

            res.status(200).json("La actividad del grupo se actualizo correctamente");
        } catch (error: any) {
            res.status(500).json({
                error: "Error al actualizar la actividad del grupo",
                message: error.message
            });
        }
    }
}