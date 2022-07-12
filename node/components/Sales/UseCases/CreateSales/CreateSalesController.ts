import { Request, Response } from "express";
import { ISaleRepository } from "../../Repositories/ISaleRepository";
import { CreateSalesUseCase } from "./CreateSalesUseCase";

class CreateSaleController {
    constructor ( private createSalesUseCase : CreateSalesUseCase ) {}

    async handle ( req: Request, res: Response ) {

        const data: ISaleRepository = req.body

        try {
            const result = await this.createSalesUseCase.execute( data );
            res.json(result);
        } catch ( err: ErrorConstructor | any ) {
            res.status( 404) .send({ "ERROR" : err.message });
        }
    }
}

export { CreateSaleController }