import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateTenantInput } from './dto/create-tenant.input';
import { TenantType } from './entities/tenant.type';
import { TenantService } from './tenant.service';
import { UpdateTenantInput } from './dto/update-tenant.input';

@Resolver(() => TenantType)
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Mutation(() => TenantType)
  createTenant(
    @Args('createTenantInput') createTenantInput: CreateTenantInput,
  ) {
    return this.tenantService.create(createTenantInput);
  }

  @Query(() => [TenantType])
  tenants() {
    return this.tenantService.findAll();
  }

  @Query(() => TenantType, { name: 'tenant' })
  findOne(@Args('tenantId') tenantId: string) {
    return this.tenantService.findOne(tenantId);
  }

  @Mutation(() => TenantType)
  updateTenant(
    @Args('tenantId') tenantId: string,
    @Args('updateTenantInput') updateTenantInput: UpdateTenantInput,
  ) {
    return this.tenantService.update(tenantId, updateTenantInput);
  }

  // @Mutation(() => Tenant)
  // removeTenant(@Args('id', { type: () => Int }) id: number) {
  //   return this.tenantsService.remove(id);
  // }
}
