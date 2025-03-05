import { Request, Response } from "express";
import { GetGroupsByUserIdService } from "../../application";

export class GetGroupsByUserIdController {
    constructor(private readonly getGroupsByUserIdService: GetGroupsByUserIdService) {}

    async run( req: Request, res: Response) {
        try {

            const { id } = req.params;

            const groups = await this.getGroupsByUserIdService.run(parseInt(id));

            res.status(200).json(groups);
            
        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir los grupos del usuario",
                message: error.message
            });
        }
    }
}