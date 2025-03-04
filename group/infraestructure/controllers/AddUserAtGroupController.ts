import { Request, Response } from "express";
import { AddUserAtGroupService } from "../../application";

export class AddUserAtGroupController {
    constructor(private readonly addUserAtGroupService: AddUserAtGroupService) {}

    async run(req: Request, res: Response) {
        try {

            const addUserAtGroup = req.body;
            
            await this.addUserAtGroupService.run(addUserAtGroup);

            res.status(200).json("El usuario ha sido agregado exitosamente");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al agregar el usuario al grupo",
                message: error.message
            });
        }
    }
}