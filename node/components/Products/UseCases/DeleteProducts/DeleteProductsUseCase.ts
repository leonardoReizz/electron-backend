import { ProductsRepository } from "../../Repositories/ProductsRepository";

class DeleteProductsUseCase {
    constructor ( private productsRepository: ProductsRepository ) {}

    async execute ( id: number ) {
        if( !id ) 
            throw new Error( "Invalid ID" );
        return await this.productsRepository.delete( id );
    }
}

export { DeleteProductsUseCase }