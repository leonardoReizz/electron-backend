import { Request, Response, Router } from "express";
import { createProductsController } from "../components/Products/UseCases/CreateProducts";
import { deleteProductsController } from "../components/Products/UseCases/DeleteProducts";
import { listProductsController } from "../components/Products/UseCases/ListProducts";
import { ListProductUseCase } from "../components/Products/UseCases/ListProducts/ListProductsUseCase";




const productsRouter = Router();

productsRouter.post("/", ( req: Request, res: Response ) => {
    return createProductsController.handle( req, res );
})

productsRouter.get("/", ( req: Request, res: Response ) => {
    return listProductsController.handle( req, res );
})

productsRouter.delete("/:id", (  req: Request, res: Response ) => {
    return deleteProductsController.handle( req, res );
})

export { productsRouter }