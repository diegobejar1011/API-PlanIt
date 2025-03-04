import { Request, Response } from "express";
import { CreateGroupService } from "../../application/CreateGroupService";
import { GroupReq } from "../../domain/entities";

export class CreateGroupController {
    constructor(private readonly createGroupService: CreateGroupService) {}

    async run(req: Request, res: Response) {
        try {
            
            const group: GroupReq = req.body;

            await this.createGroupService.run(group);

            res.status(200).json("El grupo se ha creado correctamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al crear el grupo",
                message: error.message
            });
        }
    }
}