import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { entities } from './entities';

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE
} = process.env;

export const config: TypeOrmModuleOptions | any = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities,
  ssl: true
};
