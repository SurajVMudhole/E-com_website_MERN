//import nessary libs from here
import express from "express";
import ProductController from "./product.controller.js";
const productController = new ProductController();
const ProductRouter = express.Router();
//Handle routes
ProductRouter.get("/", productController.getAllProducts);

export default ProductRouter;
