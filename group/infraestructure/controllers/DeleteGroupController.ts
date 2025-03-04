import { Request, Response } from "express";
import { DeleteGroupService } from "../../application";

export class DeleteGroupController {
    constructor(private readonly deleteGroupService: DeleteGroupService) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await this.deleteGroupService.run(parseInt(id));

            res.status(200).json("El grupo ha sido eliminado correctamente");
        } catch (error: any) {
            res.status(500).json({
                error: "Error al eliminar el grupo",
                message: error.message
            });
        }
    }
}