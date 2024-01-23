import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateTenantInput } from './dto/create-tenant.input';
import { TenantType } from './entities/tenant.type';
import { TenantService } from './tenant.service';

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

  // @Query(() => Tenant, { name: 'tenant' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.tenantsService.findOne(id);
  // }

  // @Mutation(() => Tenant)
  // updateTenant(
  //   @Args('updateTenantInput') updateTenantInput: UpdateTenantInput,
  // ) {
  //   return this.tenantsService.update(updateTenantInput.id, updateTenantInput);
  // }

  // @Mutation(() => Tenant)
  // removeTenant(@Args('id', { type: () => Int }) id: number) {
  //   return this.tenantsService.remove(id);
  // }
}
