import CartItemsModel from "./cartitems.model.js";
export default class CartItemsConstoller {
  addToCart(req, res) {
    const { productID, userEmail, quantity } = req.body;
    const result = CartItemsModel.add(productID, userEmail, quantity);
    if (!result) res.status(501).send("Could not add product");
    else res.status(201).send(result);
  }
  getAllCartItems(req, res) {
    const rs = CartItemsModel.getAll();
    res.status(200).send(rs);
  }
}
