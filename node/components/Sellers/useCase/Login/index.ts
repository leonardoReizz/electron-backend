import { SellerRepository } from "../../repositories/SellerRepository";
import { LoginSellersController } from "./LoginSellersController";
import { LoginSellersUseCase } from "./LoginSellersUseCase";


const sellerRepository = new SellerRepository();
const loginSellersUseCase = new LoginSellersUseCase( sellerRepository );
const loginSellersController = new LoginSellersController( loginSellersUseCase );


export { loginSellersController }