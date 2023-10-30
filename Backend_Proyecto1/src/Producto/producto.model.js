import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    restaurant_id: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const productoModel = model('products', productSchema);
export default productoModel;