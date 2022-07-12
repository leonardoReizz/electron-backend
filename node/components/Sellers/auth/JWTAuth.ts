import jwt from "jsonwebtoken";
import { Seller } from "../Model/Seller";

interface IToken {
    data : Seller,
    auth: boolean,
    token: string
}

class JWTAuth {
    private result?: IToken;

    constructor (data: Seller) {
        const token = jwt.sign({userId : data.id}, data.username+'' , { expiresIn : 43200})

        this.result = {data, auth: true, token};
    }
}
export { JWTAuth }