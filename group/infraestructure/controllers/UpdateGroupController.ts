import { Request, Response } from "express";
import { UpdateGroupService } from "../../application";

export class UpdateGroupController {
    constructor(private readonly updateGroupService: UpdateGroupService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            const updateGroup = req.body;

            await this.updateGroupService.run(updateGroup, parseInt(id));

            res.status(200).json("El grupo ha sido actualizado correctamente");
            
        } catch (error: any) {
            res.status(500).json({
                error: "Error al actualizar el grupo",
                message: error.message
            });
        }
    }
}