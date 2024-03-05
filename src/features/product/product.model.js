export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, prise, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.prise = prise;
    this.sizes = sizes;
  }

  static GetAll() {
    return Products;
  }
}

var Products = [
  new ProductModel(
    1,
    "Product 1",
    "Decs of Product 1",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 1",
    50,
    ["M", "s"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Decs of Product 2",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F66%2F71%2Fmakeup-and-beauty-products-vector-456671.jpg&tbnid=FCWHZecIymy_JM&vet=12ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmakeup-and-beauty-products-vector-456671&docid=nKYA3kHm3kgC1M&w=1000&h=1080&q=products%20images&ved=2ahUKEwjZ-_WK5dyEAxW656ACHUJhAR8QMygMegUIARCKAQ",
    "Category 2",
    50,
    ["M", "s", "XL"]
  ),
];
