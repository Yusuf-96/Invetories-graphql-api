import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateTenantInput {
  @MinLength(3)
  @Field()
  tenantName: string;

  @MinLength(3)
  @Field()
  address: string;

  @IsDateString()
  @Field()
  createdAt: string;
}
