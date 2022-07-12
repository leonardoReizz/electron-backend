import { SalesRepository } from "../../Repositories/SalesRepository";
import { DeleteSaleController } from "./DeleteSaleController";
import { DeleteSalesUseCase } from "./DeleteSaleUseCase";

const salesRepository = new SalesRepository()
const deleteSalesUseCase = new DeleteSalesUseCase(salesRepository)
const deleteSaleController = new DeleteSaleController(deleteSalesUseCase)

export { deleteSaleController }