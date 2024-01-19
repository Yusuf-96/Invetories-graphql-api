import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNumber, MinLength } from 'class-validator';

@InputType()
export class CreateProductsInput {
  @MinLength(2)
  @Field()
  productName: string;

  @MinLength(4)
  @Field()
  productDescription: string;

  @IsNumber()
  @Field()
  buyingPrice: number;

  @IsNumber()
  @Field()
  sellingPrice: number;

  @IsDateString()
  @Field()
  createdDate: string;

  @IsDateString()
  @Field()
  updatedDate: string;
}
