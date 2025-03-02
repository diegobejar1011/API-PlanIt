import { Request, Response } from "express";
import { GetPersonalActivityInfoService } from "../../application";

export class GetPersonalActivityInfoController {
    constructor(private readonly getPersonalActivityInfoService: GetPersonalActivityInfoService) {}

    async run(req: Request, res: Response){
        try {
            
            const { id } = req.params;

            const personalActivityInfo = await this.getPersonalActivityInfoService.run(parseInt(id));

            res.status(200).json(personalActivityInfo);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir la información de la actividad",
                message: error.message
            });
        }
    }
}