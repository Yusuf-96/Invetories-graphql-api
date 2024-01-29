import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('Tenant')
export class TenantType {
  @Field((type) => ID)
  tenantId: string;

  @Field()
  tenantName: string;

  @Field()
  address: string;

  @Field()
  createdAt: string;
}
