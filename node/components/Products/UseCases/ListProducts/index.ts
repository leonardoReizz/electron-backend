import { ProductsRepository } from "../../Repositories/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductUseCase } from "./ListProductsUseCase";

const productsRepository = new ProductsRepository();
const listProductsUseCase = new ListProductUseCase( productsRepository )
const listProductsController = new ListProductsController( listProductsUseCase );


export { listProductsController }