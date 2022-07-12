import { Request, Response } from "express";
import { SalesRepository } from "../../Repositories/SalesRepository";
import { ListSalesUseCase } from "./ListSalesUseCase";

class ListSalesController {
    constructor ( private listSalesUseCase : ListSalesUseCase ) {}

    async handle (req: Request, res: Response ) {
        try {
            const result = await this.listSalesUseCase.execute();
            res.json( result )
        } catch ( err: ErrorConstructor | any ) {
            res.status( 404 ).send({ "ERROR" : err.message })
        }
    }
}

export { ListSalesController }