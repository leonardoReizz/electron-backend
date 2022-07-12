

class Seller {
    id?: number;
    fullname?: string;
    username?: string;
    email?: string;
    pass?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor ( props: Omit<Seller, 'id'>, id?: number ) {
        const date = new Date();
        this.createdAt = date;
        this.updatedAt = date;

        Object.assign(this, props);
    }
}

export { Seller }