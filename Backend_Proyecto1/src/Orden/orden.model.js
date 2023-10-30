import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user_id: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    state: {
      type: String,
      required: true,
      enum: [
        'creado',
        'enviado',
        'aceptado',
        'recibido',
        'en direccion',
        'realizado',
      ],
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const ordenModel = model('orders', orderSchema);
export default ordenModel;