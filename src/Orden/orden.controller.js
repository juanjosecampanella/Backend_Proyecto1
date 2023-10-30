import ordenModel from './orden.model';

//POST / Create
export async function createOrder(req, res) {
    try {
      const order = req.body;
      req.body.active = true;
      const document = await ordenModel.create(order);
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  
  //GET / Read
  //ID
  export async function readOrder(req, res) {
    try {
      const id = req.params.id;
      const document = await ordenModel.findOne({ _id: id, active: true });
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  //Usuario que realizó, Usuario que envío, Restaurante Y/O Fechas
  export async function readOrders(req, res) {
    try {
      const { user_id, restaurant_id, initial_date, final_date } = req.query;
      const filter = {
        ...(user_id && { user_id: user_id }),
        ...(restaurant_id && { restaurant_id: restaurant_id }),
        ...(initial_date &&
          final_date && {
            createdAt: {
              $gte: new Date(initial_date),
              $lt: new Date(final_date),
            },
          }),
        active: true,
      };
      const documents = await ordenModel.find(filter);
      documents.length > 0
        ? res.status(200).json(documents)
        : res.sendStatus(404);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  //Enviados pero sin aceptar
  export async function readSent(res) {
    try {
      const document = await ordenModel.find({
        state: 'enviado',
        active: true,
      });
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  
  //PATCH / Update
  export async function updateOrder(req, res) {
    try {
      const id = req.params.id;
      const document = await ordenModel.findOneAndUpdate(
        { _id: id, state: 'creado', active: true },
        req.body,
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  
  //DELETE / Delete
  export async function deleteOrder(req, res) {
    try {
      const id = req.params.id;
      const document = await ordenModel.findByIdAndUpdate(
        id,
        { active: false },
        { new: true }
      );
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }