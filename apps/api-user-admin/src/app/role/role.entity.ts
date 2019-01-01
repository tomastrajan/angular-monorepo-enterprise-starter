import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { User } from '../user/user.entity';

@Entity()
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
}
