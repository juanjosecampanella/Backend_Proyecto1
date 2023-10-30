import express from 'express';
import usuarioRouter from './user/user.router';
import restauranteRouter from './Restaurante/restaurante.router';
import productoRouter from './Producto/producto.router';
import ordenRouter from './Orden/orden.router';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/Orden', ordenRouter);
app.use('/Restaurante', restauranteRouter);
app.use('/Producto', productoRouter);
app.use('/Usuario', usuarioRouter);

mongoose
  .connect('mongodb+srv://cluster0.sblydjf.mongodb.net/', {
    dbName: 'delivery',
    user: 'test',
    pass: 'test',
  })
  .then(() => console.log('database connected'))
  .catch((error) => console.log(error));

try {
  app.listen(port);
  console.log('server running on port ' + port);
} catch (error) {
  console.log(error);
}