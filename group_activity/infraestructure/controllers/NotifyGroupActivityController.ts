import { Request, Response } from "express";
import { NotifyGroupActivityService } from "../../application";


export class NotifyGroupActivityController {
    constructor(private readonly notifyGroupActivityService: NotifyGroupActivityService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { id } = req.params;

            await this.notifyGroupActivityService.run(parseInt(id));

            res.status(200).json("Se ha notificado la actividad grupal");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al notificar la actividad grupal",
                message: error.message
            });
        }
    }
}