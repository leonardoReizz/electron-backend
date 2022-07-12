import { ProductsRepository } from "../../Repositories/ProductsRepository";

class ListProductUseCase {
    constructor ( private productsRepository : ProductsRepository ) {}
    async execute () {
        return await this.productsRepository.list();
    }
}

export { ListProductUseCase }