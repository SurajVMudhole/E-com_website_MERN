export default class CartItemsModel {
  constructor(productID, userEmail, quantity, id) {
    this.productID = productID;
    this.userEmail = userEmail;
    this.quantity = quantity;
    this.id = id;
  }
  static getAll() {
    return CartItems;
  }
  static add(productID, userEmail, quantity) {
    const newItem = new CartItemsModel(productID, userEmail, quantity);
    newItem.id = CartItems.length + 1;
    CartItems.push(newItem);
    return newItem;
  }
}

var CartItems = [new CartItemsModel(1, "seller@ecom.com", 3, 1)];
