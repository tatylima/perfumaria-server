import { Body, Controller, Get,Param, Post } from '@nestjs/common';
import { ApiOperation,ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Encontrar todos os perfumes',
  })

  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar pedido',
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um pedido',
  })
  create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.productService.create(dto);
  }
}
