import { Request, Response } from "express";
import { GetPersonalActivitiesService } from "../../application";

export class GetPersonalActivitiesController {
    constructor(private readonly getPersonalActivitiesService: GetPersonalActivitiesService) {}

    async run(req: Request, res: Response) {
        try {
            
            const { userId } = req.params;

            const personalActivities = await this.getPersonalActivitiesService.run(parseInt(userId));

            res.status(200).json(personalActivities);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir las actividades del usuario",
                message: error.message
            });
        }
    }
}