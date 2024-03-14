import express from "express";
import CartItemsConstoller from "./cartitems.controller.js";
const CartRoutes = express.Router();
const cartItemsConstoller = new CartItemsConstoller();
CartRoutes.get("/", cartItemsConstoller.getAllCartItems);
CartRoutes.post("/", cartItemsConstoller.addToCart);

export default CartRoutes;
