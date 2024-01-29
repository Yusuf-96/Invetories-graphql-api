import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { ProductsResolver } from './products.resolver';
import { TenantModule } from 'src/tenant/tenant.module';
import { Tenant } from 'src/tenant/entities/tenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Tenant]), TenantModule],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
