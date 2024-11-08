export class Product {
  id: number;
  productName: string;
  price: number;
  categoryId: number;

  constructor(
    id: number,
    productName: string,
    price: number,
    categoryId: number,
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.categoryId = categoryId;
  }
}
