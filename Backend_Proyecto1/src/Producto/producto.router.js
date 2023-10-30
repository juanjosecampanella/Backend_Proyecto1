import { Router } from 'express';
import {
  createProduct,
  readProduct,
  readProducts,
  updateProduct,
  deleteProduct,
} from './producto.controller';

const productoRouter = Router();

productoRouter.post('/', createProduct);
productoRouter.get('/:id', readProduct);
productoRouter.get('/', readProducts);
productoRouter.patch('/:id', updateProduct);
productoRouter.delete('/:id', deleteProduct);

export default productoRouter;