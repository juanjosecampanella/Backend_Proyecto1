import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    categories: {
      type: [String],
      validate: {
        validator: function (array) {
          return array && array.length > 0;
        },
        message: 'Debe ingresar al menos una categoría.',
      },
    },
    inventory: { type: Array, required: false },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const restauranteModel = model('restaurants', restaurantSchema);
export default restauranteModel;

import { Schema, model } from 'mongoose';