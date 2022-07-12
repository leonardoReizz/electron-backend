class Product {
    id?: number;
    name?: string;
    barcode?: string;
    purchasePrice?: number;
    salveValue?: number;
    urlImage?: string;
    amount?: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(props: Omit<Product, 'id'>, id?: number){
        const date = new Date()
        this.createdAt = date;
        this.updatedAt = date;

        Object.assign(this, props);
    }
}

export { Product }