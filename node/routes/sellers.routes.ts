import { Request, Response, Router } from "express";
import { loginSellersController } from "../components/Sellers/useCase/Login";


const sellersRouter = Router();


sellersRouter.post("/login", ( req: Request, res: Response ) => {
    return loginSellersController.handle( req, res );        
})

export { sellersRouter }