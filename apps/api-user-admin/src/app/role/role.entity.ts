import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

import { User } from '../user/user.entity';

@Entity('ames-role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @ManyToMany(type => User, user => user.roles)
  @JoinTable()
  users: User[];

  @Column()
  active: boolean;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
