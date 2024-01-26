import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTenantInput } from './dto/create-tenant.input';
import { UpdateTenantInput } from './dto/update-tenant.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TenantType } from './entities/tenant.type';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant) private tenantRepository: Repository<Tenant>,
  ) {}

  async create(createTenantInput: CreateTenantInput): Promise<Tenant> {
    const { tenantName, address, createdAt } = createTenantInput;

    const tenant = this.tenantRepository.create({
      tenantId: uuid(),
      tenantName,
      address,
      createdAt,
    });

    return this.tenantRepository.save(tenant);
  }

  async findAll(): Promise<Tenant[]> {
    let tenants = this.tenantRepository.find();
    return tenants;
  }

  async findOne(tenantId: string): Promise<Tenant> {
    let tenant = this.tenantRepository.findOneBy({ tenantId });
    return tenant;
  }

  async update(
    tenantId: string,
    updateTenantInput: UpdateTenantInput,
  ): Promise<void> {
    const tenant = this.tenantRepository.findOneBy({ tenantId });

    if (!tenant) {
      throw new BadRequestException('Tenant not founss');
    }

    await this.tenantRepository.save(updateTenantInput);

    // return newTenant
  }

  // remove(id: number) {
  //   return `This action removes a #${id} tenant`;
  // }
}
