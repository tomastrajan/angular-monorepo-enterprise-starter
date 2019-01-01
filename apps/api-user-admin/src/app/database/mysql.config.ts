import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '../user/user.entity';

export const config: TypeOrmModuleOptions | any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'ames-user-admin',
  entities: [User],
  synchronize: true
};
