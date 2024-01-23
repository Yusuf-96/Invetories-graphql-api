import { Injectable } from '@nestjs/common';
import { CreateTenantInput } from './dto/create-tenant.input';
import { UpdateTenantInput } from './dto/update-tenant.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

  // findOne(id: number) {
  //   return `This action returns a #${id} tenant`;
  // }

  // update(id: number, updateTenantInput: UpdateTenantInput) {
  //   return `This action updates a #${id} tenant`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenant`;
  // }
}
