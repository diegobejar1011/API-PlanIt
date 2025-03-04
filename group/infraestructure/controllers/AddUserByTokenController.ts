import { Request, Response } from "express";
import { AddUserByTokenService } from "../../application/AddUserByTokenService";

export class AddUserByTokenController {
    constructor(private readonly addUserByTokenService: AddUserByTokenService) {}
    
    async run(req: Request, res: Response) {
        try {
            
            const addUserByToken = req.body;

            await this.addUserByTokenService.run(addUserByToken);

            res.status(200).json("Se ha añadido correctamente al grupo");

        } catch (error: any) {
            res.status(500).json({
                error: "Error al añadirse al grupo por token",
                message: error.message
            });
        }
    }
}