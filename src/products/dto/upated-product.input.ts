import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  productName: string;

  @Field({ nullable: true })
  productDescription: string;

  @Field({ nullable: true })
  buyingPrice: number;

  @Field({ nullable: true })
  sellingPrice: number;
}
