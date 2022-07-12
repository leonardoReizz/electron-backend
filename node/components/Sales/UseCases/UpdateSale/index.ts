import { SalesRepository } from "../../Repositories/SalesRepository";
import { UpdateSaleController } from "./UpdateSalesController";
import { UpdateSalesUseCase } from "./UpdateSalesUseCase";

const salesRepository = new SalesRepository();
const updateSalesUseCase = new UpdateSalesUseCase( salesRepository );
const updateSaleController = new UpdateSaleController( updateSalesUseCase );

export { updateSaleController }