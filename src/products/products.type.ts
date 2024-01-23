import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TenantType } from 'src/tenant/entities/tenant.type';

@ObjectType('Products')
export class ProductsType {
  @Field((type) => ID)
  productId: string;

  @Field()
  productName: string;

  @Field()
  productDescription: string;

  @Field()
  buyingPrice: number;

  @Field()
  sellingPrice: number;

  @Field()
  createdDate: string;

  @Field()
  updateDate: string;

  @Field((type) => TenantType, { nullable: true })
  tenants: string;
}
