import { Request, Response } from "express";
import { DeleteSalesUseCase } from "./DeleteSaleUseCase";

class DeleteSaleController {
    constructor( private deleteSalesUseCase : DeleteSalesUseCase ) {}


    handle ( req: Request, res: Response ) {
        const { id } = req.params
        const idDelete = parseInt( id )
        
        try {
            const result = this.deleteSalesUseCase.execute( idDelete )
            res.json( result )
        } catch( err: ErrorConstructor | any ) {
            res.status( 404 ).json({ "ERROR" : err.message })
        }
        
    }

}

export { DeleteSaleController }