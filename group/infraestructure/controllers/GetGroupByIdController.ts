import { Request, Response } from "express";
import { GetGroupByIdService } from "../../application/GetGroupByIdService";

export class GetGroupByIdController {
    constructor(private readonly getGroupByIdService: GetGroupByIdService) {}

    async run(req: Request, res: Response){
        try {

            const { id } = req.params;
            
            const group = await this.getGroupByIdService.run(parseInt(id));

            res.status(200).json(group);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir el grupo por id",
                message: error.message
            });
        }
    }
}