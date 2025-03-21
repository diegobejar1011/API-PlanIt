import { Request, Response } from "express";
import { GetGroupActivitiesService } from "../../application/GetGroupActivitiesService";

export class GetGroupActivitiesController {
    constructor(private readonly getGroupActivitiesService: GetGroupActivitiesService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { groupId, status } = req.query;

            if (!groupId) {
                throw new Error("El id del grupo es requerido" );
            } else if (!status) {
                throw new Error("El status de las actividades es requerido");
            }

            const groupActivities = await this.getGroupActivitiesService.run(parseInt(groupId.toString()), status.toString());

            res.status(200).json(groupActivities);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir las actividades del grupo",
                message: error.message
            });
        }
    }
}