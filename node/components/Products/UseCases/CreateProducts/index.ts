import { ProductsRepository } from "../../Repositories/ProductsRepository";
import { CreateProductsController } from "./CreateProductsController";
import { CreateProductsUseCase } from "./CreateProductsUseCase";



const productsRepository = new ProductsRepository();
const createProductsUseCase = new CreateProductsUseCase( productsRepository );
const createProductsController = new CreateProductsController( createProductsUseCase );

export { createProductsController }