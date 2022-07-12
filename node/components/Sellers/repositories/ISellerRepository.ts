import { Seller } from "../Model/Seller";

interface ISellerRepository {
    login ( data: Seller ) : Promise<Seller[]>;
}
export { ISellerRepository }