import { Request, Response } from "express";
import { CreatePersonalActivityService } from "../../application";

export class CreatePersonalActivityController {
    constructor(private readonly createPersonalActivityService: CreatePersonalActivityService) {}

    async run(req: Request, res: Response) {
        try {
            
            const personalActivityInfo = req.body;

            await this.createPersonalActivityService.run(personalActivityInfo);

            res.status(200).json("Se ha creado correctamente la actividad");

        } catch (error: any) {
            res.status(200).json({
                error: "Error al crear una actividad",
                message: error.message
            });
        }
    }
}