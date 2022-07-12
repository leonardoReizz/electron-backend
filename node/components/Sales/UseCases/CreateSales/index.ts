import { SalesRepository } from "../../Repositories/SalesRepository"
import { CreateSaleController } from "./CreateSalesController"
import { CreateSalesUseCase } from "./CreateSalesUseCase"



const saleRepository = new SalesRepository()
const createSalesUseCase = new CreateSalesUseCase( saleRepository )
const createSaleController = new CreateSaleController( createSalesUseCase )


export { createSaleController }