import { Request, Response } from "express";
import { GetTokenService, SaveTokenService } from "../../application";

export class SaveTokenController {
    constructor(private readonly saveTokenService: SaveTokenService) {}

    async run(req: Request, res: Response){
        try {
            const { id, token } = req.body;

            this.saveTokenService.run(id, token);

            res.status(200).json('Token de usuario guardado correctamente');

        } catch (error: any) {
            res.status(500).json({
                error: "Error al guardar el token del usuario",
                message: error.message
            })
        }
    }
}