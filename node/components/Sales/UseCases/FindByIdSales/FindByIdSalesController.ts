import { Request, Response } from "express";
import { FindByIdSalesUseCase } from "./FindByIdSalesUseCase";

class FindByIdController {
    constructor ( private findByIdSalesUseCase : FindByIdSalesUseCase ) {}

    async handle ( req: Request, res: Response ) {
        const { id } = req.params
        const idFind = parseInt( id )

        try {
            const result = await this.findByIdSalesUseCase.execute( idFind )
            res.json(result)
        } catch( error: ErrorConstructor | any ) {
            res.status( 404 ).send({ "ERROR" : error.message })
        }
    }
}

export { FindByIdController }