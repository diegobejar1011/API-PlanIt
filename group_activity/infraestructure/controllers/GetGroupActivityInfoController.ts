import { Request, Response } from "express";
import { GetGroupActivityInfoService } from "../../application";

export class GetGroupActivityInfoController {
    constructor(private readonly getGroupActivityInfoService: GetGroupActivityInfoService) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const groupActivityInfo = await this.getGroupActivityInfoService.run(parseInt(id));

            res.status(200).json(groupActivityInfo);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir la actividad del grupo",
                message: error.message
            });
        }
    }
}