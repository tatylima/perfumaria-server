import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  findAll() {
    return 'Buscar todos os perfumes';
  }

  create(createProductDto: CreateProductDto) {
    return 'Criar um pedido' + JSON.stringify(createProductDto);
  }
}
