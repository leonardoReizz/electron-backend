import { Product } from "../Model/Product"

interface IProductsRepository {
    create ( product : Product ) : Promise<void>;
    delete ( id: number) : Promise<void>;
    list () : Promise<Product[]>;
    update ( product: Product, id: number ) : Promise<void>;
}

export { IProductsRepository }