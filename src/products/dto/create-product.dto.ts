import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfume',
    example: 'Lilly',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do perfurme',
    example:
      'Flores',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do perfume',
    example: 144.90,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://www.boticario.com.br/lily-eau-de-parfum-nova-versao-30ml',
  })
  image: string;
}
