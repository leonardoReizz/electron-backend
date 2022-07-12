import Router from 'express'
import { productsRouter } from './products.routes';
import { salesRouter } from './sales.routes'
import { sellersRouter } from './sellers.routes';

const routes = Router()

routes.use( "/sales", salesRouter );
routes.use( "/products", productsRouter );
routes.use( "/sellers", sellersRouter );

export { routes }