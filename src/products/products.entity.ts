import { TenantType } from 'src/tenant/entities/tenant.type';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  productId: string;

  @Column()
  productName: string;

  @Column()
  productDescription: string;

  @Column()
  buyingPrice: number;

  @Column()
  sellingPrice: number;

  @Column()
  createdDate: string;

  @Column()
  updatedDate: string;

  @Column((type) => TenantType)
  tenants: TenantType;
}
