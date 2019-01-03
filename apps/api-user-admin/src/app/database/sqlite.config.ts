import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { entities } from './entities';

export const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  entities
};
