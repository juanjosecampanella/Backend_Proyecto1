import { Router } from 'express';
import {
  createRestaurant,
  readRestaurant,
  readRestaurants,
  updateRestaurant,
  deleteRestaurant,
} from './restaurante.controller';

const restauranteRouter = Router();

restauranteRouter.post('/', createRestaurant);
restauranteRouter.get('/:id', readRestaurant);
restauranteRouter.get('/', readRestaurants);
restauranteRouter.patch('/:id', updateRestaurant);
restauranteRouter.delete('/:id', deleteRestaurant);

export default restauranteRouter;