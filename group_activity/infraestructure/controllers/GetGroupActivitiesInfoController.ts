import { Request, Response } from "express";
import { GetGroupActivitiesInfoService } from "../../application";

export class GetGroupActivitiesInfoController {
    constructor(private readonly getGroupActivitiesInfoService: GetGroupActivitiesInfoService) {}

    async run(req: Request, res: Response) {
        try {

            const groupActivities = await this.getGroupActivitiesInfoService.run();

            res.status(200).json(groupActivities);
            
        } catch (error: any) {
            res.status(500).json({
                error: "Erro al conseguir las actividades de los grupos",
                message: error.message
            });
        }
    }
}