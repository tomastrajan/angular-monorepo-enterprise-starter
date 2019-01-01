import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, UserModule, RoleModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
