import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Products')
export class ProductsType {
  @Field((type) => ID)
  productId: string;

  @Field()
  productName: string;

  @Field()
  productDescription:string

  @Field()
  buyingPrice: number;

  @Field()
  sellingPrice: number;

  @Field()
  createdDate: string;

  @Field()
  updateDate: string;
}
