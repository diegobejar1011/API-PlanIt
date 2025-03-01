import { Request, Response } from "express";
import { CreateUserService } from "../../application/CreateUserService";
import { CreateUserReq } from "../../domain/entities";

export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    async run(req: Request, res: Response) {
        try {
            const user : CreateUserReq = req.body;

            const result = await this.createUserService.execute(user);

            res.status(200).json(result);
        } catch (error: any) {
            console.log("Error al crear un usuario: " + error);
            
            res.status(500).json({
                error: "Error al crear el usuario",
                message: error.message
            });
        }
    }
}