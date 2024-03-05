//import nessary libs from here
import express from "express";
import { upload } from "../../middlewares/fileupload.middleware.js";
import ProductController from "./product.controller.js";
const productController = new ProductController();
const ProductRouter = express.Router();
//Handle routes
ProductRouter.get("/", productController.getAllProducts);
ProductRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
export default ProductRouter;
