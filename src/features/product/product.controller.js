import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  getAllProducts(req, res) {
    try {
      const products = this.productRepository.getAll();
      res.status(200).send(products);
    } catch (err) {
      throw new ApplicationError(`Error adding\n${err}`, 500);
    }
  }
  addProduct(req, res) {
    try {
      const { name, price, sizes, desc, category } = req.body;
      const newProduct = new ProductModel(
        name,
        desc,
        req.file.filename,
        category,
        parseFloat(price),
        sizes.split(",")
      );
      const result = this.productRepository.add(newProduct);
      res.status(201).send(newProduct);
    } catch (err) {
      throw new ApplicationError(`Error adding\n${err}`, 500);
    }
  }
  getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = this.productRepository.get(id);
      if (!product) res.status(404).send(`Product with id ${id} not found`);
      else res.status(200).send(product);
    } catch (err) {
      throw new ApplicationError(`Error adding\n${err}`, 500);
    }
  }
  filterProducts(req, res) {
    const result = ProductModel.filter(
      req.query.minPrice,
      req.query.maxPrice,
      req.query.category
    );
    if (!result) res.status(404).send(`No Produts available`);
    else res.status(200).send(result);
  }
  RateProduct(req, res) {
    const error = ProductModel.rateProduct(
      req.body.userEmail,
      req.body.productID,
      req.body.rating
    );
    if (error) res.status(500).send({ error });
    else res.status(200).send("Thank you for rating!");
  }
}
