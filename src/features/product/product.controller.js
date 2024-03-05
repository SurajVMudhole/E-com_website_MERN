import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    var products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    var rs = ProductModel.add(newProduct);
    res.status(201).send(newProduct);
  }
  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) res.status(404).send(`Product with id ${id} not found`);
    else res.status(200).send(product);
  }
  filterProducts(req, res) {}
  rateProduct(req, res) {}
}
