import { Sale } from "../../Model/Sale";
import { SalesRepository } from "../../Repositories/SalesRepository";

class CreateSalesUseCase {
    constructor ( private salesRepository : SalesRepository ) {} 
    async execute (data : Sale) {
        if( !data.idClient )
            throw new Error( "idClient is Required" );
        if( !data.total )
            throw new Error( "total is Required" );
        if( !data.formPayment )
            throw new Error( "formPayment is Required" );
        if( !data.totalPaid )
            throw new Error( "idClient is Required" );

        return await this.salesRepository.create( data )
    }
}

export { CreateSalesUseCase }