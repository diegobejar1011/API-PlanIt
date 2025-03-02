import { Request, Response } from "express";
import { GetPersonalActivitiesInfoService } from "../../application";


export class GetPersonalActivitiesInfoController {
    constructor(private readonly getPersonalActivitiesInfoService: GetPersonalActivitiesInfoService) {}

    async run(req: Request, res: Response) {
        try {
            const personalActivitiesInfo = await this.getPersonalActivitiesInfoService.run();

            res.status(200).json(personalActivitiesInfo);
        } catch (error: any) {
            res.status(500).json({
                error: "Error al obtener las actividades personales",
                message: error.message
            });
        }
    }
}