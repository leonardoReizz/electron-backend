import { Request, Response } from "express";
import { UpdateSalesUseCase } from "./UpdateSalesUseCase";

class UpdateSaleController{
    constructor ( private updateSalesUseCase : UpdateSalesUseCase ){}
    async handle ( req: Request, res: Response ) {
        const { id } = req.params
        const data = req.body
        const idUpdate = parseInt(id)

        try {
            const result = await this.updateSalesUseCase.execute(data, idUpdate);
            res.json( result )
        } catch ( err : ErrorConstructor | any ) {
            res.status( 404 ).send({ "ERROR" : err.message })
        }
    }

}

export { UpdateSaleController }