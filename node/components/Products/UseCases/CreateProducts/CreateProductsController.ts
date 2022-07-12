import { Request, Response } from "express";
import { ICreateProductsRequestDTO } from "./CreateProductsRequestDTO";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

class CreateProductsController {
    constructor ( private createProductsUseCase : CreateProductsUseCase ){}

    async handle ( req: Request, res: Response ) {
        const data: ICreateProductsRequestDTO = req.body
    
        try {
            await this.createProductsUseCase.execute( data )
            return res.status( 201 ).send();
        } catch ( err : ErrorConstructor | any ) {
            return res.status( 400 ).send({ 
                message: err.message || 'Erro inesperado.' 
            });
        }
    }
}

export { CreateProductsController }