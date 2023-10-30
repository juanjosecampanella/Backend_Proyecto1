import productoModel from './producto.model';

//POST / Create
export async function createProduct(req, res) {
  try {
    const product = req.body;
    req.body.active = true;
    const document = await productoModel.create(product);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//GET / Read
//ID
export async function readProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Restaurant AND/OR Category
export async function readProducts(req, res) {
  try {
    const { restaurant_id, category } = req.query;
    const filter = {
      ...(restaurant_id && { restaurant_id: restaurant_id }),
      ...(category && { category: category }),
      active: true,
    };
    const documents = await productoModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//PATCH / Update
export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}