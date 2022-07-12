import { ISaleRepository } from "../../Repositories/ISaleRepository";
import { SalesRepository } from "../../Repositories/SalesRepository";
import { FindByIdController } from "./FindByIdSalesController";

class FindByIdSalesUseCase{
    constructor ( private saleRepository : SalesRepository ) {}
    execute ( id: number ){
        if( !id )
            throw new Error( "Invalid ID" )
            
        return this.saleRepository.findById( id );        
    }
}

export { FindByIdSalesUseCase }