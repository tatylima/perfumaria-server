import { IsNumber, IsPositive } from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsPositive()
  number: number;
}
