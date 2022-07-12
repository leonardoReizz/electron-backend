interface ICreateProductsRequestDTO {
    name: string,
    barcode: string,
    purchasePrice: number,
    saleValue: number,
    imgUrl: string,
    urlImage: string,
}

export { ICreateProductsRequestDTO }