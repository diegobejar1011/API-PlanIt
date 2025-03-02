import { Request, Response } from "express";
import { GetCategoriesService } from "../../application";

export class GetCategoriesControllers {
    constructor(private readonly getCategoriesService: GetCategoriesService) {}

    async run(req: Request, res: Response){
        try {
            
            const categories = await this.getCategoriesService.run();

            res.status(200).json(categories);

        } catch (error: any) {
            res.status(500).json({
                error: "Error al conseguir las categorias",
                message: error.message
            })
        }
    }
}