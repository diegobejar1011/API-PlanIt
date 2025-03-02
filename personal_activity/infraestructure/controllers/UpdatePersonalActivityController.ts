import { Request, Response } from "express";
import { UpdatePersonalActivityService } from "../../application";

export class UpdatePersonalActivityController {
    constructor(private readonly updatePersonalActivityService: UpdatePersonalActivityService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;
            const personalActivityInfoReq = req.body;

            await this.updatePersonalActivityService.run(parseInt(id), personalActivityInfoReq);

            res.status(200).json("La actividad ha sido actualizada correctamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al actualizar la actividad del usuario",
                message: error.message
            });
        }
    }
}