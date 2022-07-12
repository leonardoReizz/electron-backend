import { Product } from "../../Model/Product";
import { ProductsRepository } from "../../Repositories/ProductsRepository";
import { ICreateProductsRequestDTO } from "./CreateProductsRequestDTO";

class CreateProductsUseCase {
    constructor ( private productsRepository : ProductsRepository ) {}
    async execute ( data: ICreateProductsRequestDTO ) {

        if ( !data.name )
            throw new Error ( "Nome invalido." );
        if ( !data.barcode )
            throw new Error( "Codigo de barras invalido." );
        if ( !data.saleValue )
            throw new Error( "Valor de venda invalido." );
        if ( data.purchasePrice )
            if( data.purchasePrice > data.saleValue)
                throw new Error( "Valor de compra maior que valor de venda." )

        const product = new Product( data );
        
        await this.productsRepository.create( product );
    }
}

export { CreateProductsUseCase }