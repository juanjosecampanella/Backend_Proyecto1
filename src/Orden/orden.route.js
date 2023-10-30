import { Router } from 'express';
import {
  createOrder,
  readOrder,
  readOrders,
  readSent,
  updateOrder,
  deleteOrder,
} from './orden.controller';

const ordenRouter = Router();

ordenRouter.post('/', createOrder);
ordenRouter.get('/:id', readOrder);
ordenRouter.get('/', readOrders);
ordenRouter.get('/sent/', readSent);
ordenRouter.patch('/:id', updateOrder);
ordenRouter.delete('/:id', deleteOrder);

export default ordenRouter;