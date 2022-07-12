

interface ISaleRepository {
    id: number,
    idSeller: number,
    idClient: number,
    total: number,
    totalPaid: number,
    formPayment: string,
    createdAt: Date,
    updateAt: Date
}

export { ISaleRepository }