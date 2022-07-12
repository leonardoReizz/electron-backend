import { Sale } from "../../Model/Sale";
import { SalesRepository } from "../../Repositories/SalesRepository";

class UpdateSalesUseCase {
    constructor ( private salesRepository: SalesRepository ) {}
    async execute (data: Sale, id: number ) {
        if( !id )
            throw new Error( "Invalid ID" );
        if( !data.idClient )
            throw new Error( "Invalid IDClient" );
        if( !data.idSeller )
            throw new Error( "Invalid IDSeller" );
        if( !data.formPayment ) 
            throw new Error ("Invalid Form Payment" );
        if( !data.total )
            throw new Error( "Invalid Total Value" );
        if( !data.totalPaid )
            throw new Error ( "Invalid Total Paid" );


        return await this.salesRepository.update(data, id)
    }
}

export { UpdateSalesUseCase }