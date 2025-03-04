import { Request, Response } from "express";
import { GetUsersAtGroupService } from "../../application";

export class GetUsersAtGroupController {
    constructor(private readonly getUserAtGroupService: GetUsersAtGroupService) {}

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;
            
            const usersAtGroup = await this.getUserAtGroupService.run(parseInt(id));

            res.status(200).json(usersAtGroup);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir los usuarios del grupo",
                message: error.message
            });
        }
    }
}