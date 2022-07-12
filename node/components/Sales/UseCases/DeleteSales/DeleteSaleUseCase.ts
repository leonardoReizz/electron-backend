import { SalesRepository } from "../../Repositories/SalesRepository";

class DeleteSalesUseCase {
    constructor ( private salesRepository : SalesRepository ) {}

    async execute ( id: number ) {
        if( !id )
            throw new Error( "Invalid ID" )

        return await this.salesRepository.delete( id )
    }
}

export { DeleteSalesUseCase }