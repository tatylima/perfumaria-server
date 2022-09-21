import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  products: Product[] = [];

  findAll() {
    return this.products;
  }

  create(createProductDto: CreateProductDto) {
    const product: Product = { id: 'random_id', ...createProductDto };
    this.products.push(product);

    return product;
  }
}
