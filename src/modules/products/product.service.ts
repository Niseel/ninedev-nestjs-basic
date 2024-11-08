import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable({})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      productName: 'Product 1',
      categoryId: 1,
      price: 100,
    },
    {
      id: 2,
      productName: 'Product 2',
      categoryId: 1,
      price: 200,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find((product) => product.id === Number(id));
  }

  createProduct(productDto: ProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...productDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(productDto: ProductDto, id: string): Product {
    const productIndex = this.products.findIndex((product) => product.id === Number(id));
    if (productIndex === -1) {
      return null;
    }
    this.products[productIndex] = { ...this.products[productIndex], ...productDto };
    return this.products[productIndex];
  }

  deleteProduct(id: string): boolean {
    const productIndex = this.products.findIndex((product) => product.id === Number(id));
    if (productIndex === -1) {
      return false;
    }
    this.products.splice(productIndex, 1);
    return true;
  }
}
