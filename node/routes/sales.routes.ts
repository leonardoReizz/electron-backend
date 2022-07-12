import { Request, Response, Router } from "express"
import { createSaleController } from "../components/Sales/UseCases/CreateSales"
import { deleteSaleController } from "../components/Sales/UseCases/DeleteSales"
import { findByIdController } from "../components/Sales/UseCases/FindByIdSales"
import { listSalesController } from "../components/Sales/UseCases/ListSales"
import { updateSaleController } from "../components/Sales/UseCases/UpdateSale"


const salesRouter = Router()


salesRouter.post("/", (req: Request, res: Response) => {
    return createSaleController.handle(req, res);
})

salesRouter.delete("/:id", (req: Request, res: Response) => {
    return deleteSaleController.handle(req, res);
})

salesRouter.get("/", (req: Request, res: Response) => {
    return listSalesController.handle(req, res);
})

salesRouter.get("/:id" , ( req:Request, res: Response ) => {
    return findByIdController.handle( req, res );
})

salesRouter.put("/:id", (req: Request, res: Response) => {
    return updateSaleController.handle(req, res)
})

export { salesRouter }