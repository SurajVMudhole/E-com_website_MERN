export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, price, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }

  static getAll() {
    return Products;
  }
  static add(productObj) {
    productObj.id = Products.length + 1;
    Products.push(productObj);
    return Products;
  }
  static get(id) {
    const product = Products.find((i) => i.id == id);
    return product;
  }
  static filter(minPrice, maxPrice, category) {
    const results = Products.find(
      (p) =>
        (!minPrice || p.price >= minPrice) &&
        (!maxPrice || p.price <= maxPrice) &&
        (!category || p.category == category)
    );
    return results;
  }
}

var Products = [
  new ProductModel(
    1,
    "Product 1",
    "Decs of Product 1",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 1",
    500,
    ["M", "s"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Decs of Product 2",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 1",
    1000,
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Decs of Product 3",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 1",
    1200,
    ["M", "s", "XL"]
  ),
  new ProductModel(
    4,
    "Product 4",
    "Decs of Product 4",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 2",
    800,
    ["M"]
  ),
];
