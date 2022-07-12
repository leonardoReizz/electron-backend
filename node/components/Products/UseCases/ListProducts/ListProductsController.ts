import { Request, Response } from "express";
import { ListProductUseCase } from "./ListProductsUseCase";

class ListProductsController {
    constructor ( private listProductUseCase : ListProductUseCase ) {}

    async handle ( req: Request, res: Response ) {
        try {
            const result = await this.listProductUseCase.execute();
            return res.status( 200 ).json( result );
        } catch ( err :ErrorConstructor | any ) {
            return res.status( 400 ).send( err.message )
        }
    } 
}

export { ListProductsController }