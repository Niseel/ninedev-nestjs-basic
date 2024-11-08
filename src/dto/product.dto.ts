import { IsNotEmpty, IsNumber, Max, Min, MinLength } from 'class-validator';

export class ProductDto {
  @MinLength(5, {
    message: 'Custom message: Product name must be at least 5 characters',
  })
  productName: string;

  @IsNumber()
  @Min(10)
  @Max(100)
  price: number;

  @IsNotEmpty()
  categoryId: number;
}
