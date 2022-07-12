import { Seller } from "../../Model/Seller";
import { SellerRepository } from "../../repositories/SellerRepository";
import { ILoginSellersRequestDTO } from "./ILoginSellersRequestDTO";

class LoginSellersUseCase {
    constructor ( private sellerRepository : SellerRepository ) {}
    async execute (data: ILoginSellersRequestDTO) {
        if( !data.username )
            throw new Error( "Username is Required" );
        if ( !data.pass )
            throw new Error( "Password is Required" );

        
        const seller = new Seller(data);
        return await this.sellerRepository.login(seller);
    }

    auth () {

    }
}

export { LoginSellersUseCase }