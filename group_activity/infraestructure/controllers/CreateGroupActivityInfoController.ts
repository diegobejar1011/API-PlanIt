import { Request, Response } from "express";
import { CreateGroupActivityInfoService } from "../../application";

export class CreateGroupActivityInfoController {
    constructor(private readonly createGroupActivityInfoService: CreateGroupActivityInfoService) {}

    async run (req: Request, res: Response) {
        try {

            const groupActivityInfo = req.body;

            await this.createGroupActivityInfoService.run(groupActivityInfo);

            res.status(200).json("La actividad del grupo se creo correctamente");
            
        } catch (error: any) {
            res.status(500).json({
                error: "Error al crear una actividad para el grupo",
                message: error.message
            });
        }
    }
}