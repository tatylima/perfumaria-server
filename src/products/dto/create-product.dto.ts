import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do pedido',
    example: 1,
  })
  number: number;
}
