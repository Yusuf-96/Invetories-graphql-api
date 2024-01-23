import { Field, Int } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Tenant {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  tenantId: string;

  @Column()
  tenantName: string;

  @Column()
  address: string;

  @Column()
  createdAt: string;
}
