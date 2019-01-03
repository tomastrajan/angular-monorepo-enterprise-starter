import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  UpdateDateColumn, CreateDateColumn
} from 'typeorm';

import { Role } from '../role/role.entity';

@Entity('ames-user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @ManyToMany(type => Role, role => role.users)
  roles: Role[];

  @Column()
  active: boolean;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
