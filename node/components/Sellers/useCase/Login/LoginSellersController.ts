import { Request, Response } from "express";
import { JWTAuth } from "../../auth/JWTAuth";
import { LoginSellersUseCase } from "./LoginSellersUseCase";

class LoginSellersController {
    constructor ( private loginSellersUseCase : LoginSellersUseCase ) {}

    async handle ( req: Request, res: Response) {
        const data = req.body;

        try {
            let result = await this.loginSellersUseCase.execute( data );
            if(!result[0])
                return res.status( 404 ).json({"ERROR" : 'Username or Password is Invalid'});
            
            const token = new JWTAuth(result[0]);

            return res.status( 200 ).json(token);
            
            
        } catch ( err : ErrorConstructor | any ) {
            res.status( 404 ).send({
                message: err.message || 'Unexpected Error'
            });  
        }
    }
}

export { LoginSellersController }