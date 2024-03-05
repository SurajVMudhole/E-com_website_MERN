import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    var products = ProductModel.GetAll();
    res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    console.log(req.body, req.file.filename);

    // const newProduct = {
    //   name,
    //   price: parseFloat(price),
    //   sizes: sizes.split(","),
    //   imageUrl: req.file.filename,
    // };
    // var rs = ProductModel.add(newProduct);
    res.status(201).send("rs");
  }
  getOneProduct(req, res) {}
  rateProduct(req, res) {}
}
