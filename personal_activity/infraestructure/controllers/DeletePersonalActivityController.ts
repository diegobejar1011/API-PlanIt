import { Request, Response } from "express";
import { DeletePersonalActivityService } from "../../application";

export class DeletePersonalActivityController {
    constructor(private readonly deletePersonalActivityService: DeletePersonalActivityService) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await this.deletePersonalActivityService.run(parseInt(id));

            res.status(200).json("La actividad ha sido eliminada correctamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al eliminar la actividad del usuario",
                message: error.message
            });
        }
    }
}