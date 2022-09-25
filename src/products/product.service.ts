import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return 'Adicionar um novo perfume';
  }

  findAll() {
    return `Retornar todos os perfumes`;
  }

  findOne(id: string) {
    return `Retornar #${id} do perfume`;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `Retorna updates  #${id} perfume`;
  }

  delete(id: string) {
    return `Remover o #${id} perfume`;
  }
}
