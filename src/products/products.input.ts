import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsNumber, IsUUID, MinLength } from 'class-validator';
import { CreateTenantInput } from 'src/tenant/dto/create-tenant.input';
import { TenantType } from 'src/tenant/entities/tenant.type';

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

  @Field(() => ID)
  tenantId: string;
}
