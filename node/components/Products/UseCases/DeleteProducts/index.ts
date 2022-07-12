import { ProductsRepository } from "../../Repositories/ProductsRepository";
import { DeleteProductsController } from "./DeleteProductsController";
import { DeleteProductsUseCase } from "./DeleteProductsUseCase";



const productsRepository = new ProductsRepository();

const deleteProductsUseCase = new DeleteProductsUseCase( productsRepository );

const deleteProductsController = new DeleteProductsController( deleteProductsUseCase )

export { deleteProductsController }