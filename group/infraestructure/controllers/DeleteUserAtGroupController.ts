import { Request, Response } from "express";
import { DeleteUserAtGroupService } from "../../application";

export class DeleteUserAtGroupController{
    constructor(private readonly deleteUserAtGroupService: DeleteUserAtGroupService) {}

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            await this.deleteUserAtGroupService.run(parseInt(id));

            res.status(200).json("El usuario fue eliminado del grupo exitosamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al eliminar el usuario del grupo",
                message: error.message
            });
        }
    }
}