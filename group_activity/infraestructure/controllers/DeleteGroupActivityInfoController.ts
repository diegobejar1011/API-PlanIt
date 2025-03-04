import { Request, Response } from "express";
import { DeleteGroupActivityInfoService } from "../../application";

export class DeleteGroupActivityInfoController {
    constructor(private readonly deleteGroupActivityInfoService: DeleteGroupActivityInfoService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;
            await this.deleteGroupActivityInfoService.run(parseInt(id));

            res.status(200).json("La actividad del grupo se ha eliminado correctamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al eliminar la actividad del grupo",
                message: error.message
            });
        }
    }
}