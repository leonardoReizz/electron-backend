import { Request, Response } from "express";
import { DeleteProductsUseCase } from "./DeleteProductsUseCase";

class DeleteProductsController {
    constructor ( private deleteProductsUseCase : DeleteProductsUseCase ) {}
    
    async handle ( req: Request, res: Response ) {
        const { id } = req.params;
        const idDelete = parseInt( id );
        
        try{
            const result = await this.deleteProductsUseCase.execute(idDelete);
            return res.json( result );
        } catch ( err : ErrorConstructor | any ) {
            return res.status( 400 ).send({ "ERROR" : err.message });
        }
    }
}

export { DeleteProductsController }