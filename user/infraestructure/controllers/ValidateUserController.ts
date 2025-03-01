import { Request, Response } from "express";
import { ValidateUserService } from "../../application/ValidateUserService";

export class ValidateUserController {
    constructor(private readonly validateUserService: ValidateUserService) {}
    async run(req: Request, res: Response){
        try {
            
            const { email, password } = req.body
        
            const result = await this.validateUserService.run(email, password);

            res.status(200).json(result);

        } catch (error: any) {
            console.log("Error al validar el usuario: " + error);

            res.status(500).json({
                error: "Error al validar el usuario",
                message: error.message
            })
        }
    }
}