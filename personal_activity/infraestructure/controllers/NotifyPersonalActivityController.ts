import { Request, Response } from "express";
import { NotifyPersonalActivityService } from "../../application";

export class NotifyPersonalActivityController {
    constructor(private readonly notifyPersonalActivityService: NotifyPersonalActivityService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            await this.notifyPersonalActivityService.run(parseInt(id));

            res.status(200).json("El usuario ha sido notificado exitosamente!");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al notificar la actividad personal al usuario",
                message: error.message
            });
        }
    }
}