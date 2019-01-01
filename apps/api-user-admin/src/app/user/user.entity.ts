import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

import { Role } from '../role/role.entity';

@Entity()
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
}
