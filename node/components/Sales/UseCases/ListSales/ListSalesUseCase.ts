import { SalesRepository } from "../../Repositories/SalesRepository";

class ListSalesUseCase {
    constructor ( private salesRepository : SalesRepository ) {} 

    async execute () {
        return await this.salesRepository.list();
    }
}

export { ListSalesUseCase }