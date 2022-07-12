class Sale {
    id?: number;
    idSeller?: number;
    idClient?: number;
    total?: number;
    totalPaid?: number;
    formPayment?: string;
    createdAt?: Date
    updateAt?:Date

    constructor(){
        const date = new Date()
        this.createdAt = date
        this.updateAt = date
    }
    
}

export { Sale }