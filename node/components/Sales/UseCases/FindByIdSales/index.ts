import { SalesRepository } from "../../Repositories/SalesRepository";
import { FindByIdController } from "./FindByIdSalesController";
import { FindByIdSalesUseCase } from "./FindByIdSalesUseCase";



const saleRepository = new SalesRepository();
const findByIdSalesUseCase = new FindByIdSalesUseCase(saleRepository)
const findByIdController = new FindByIdController(findByIdSalesUseCase);

export { findByIdController }