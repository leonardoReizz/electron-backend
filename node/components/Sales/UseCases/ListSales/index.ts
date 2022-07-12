import { Sale } from "../../Model/Sale";
import { SalesRepository } from "../../Repositories/SalesRepository";
import { ListSalesController } from "./ListSalesController";
import { ListSalesUseCase } from "./ListSalesUseCase";


const saleRepository = new SalesRepository()
const listSalesUseCase = new ListSalesUseCase( saleRepository )
const listSalesController = new ListSalesController( listSalesUseCase )

export { listSalesController } 