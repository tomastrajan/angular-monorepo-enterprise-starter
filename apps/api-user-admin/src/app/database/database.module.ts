import { Global, Module } from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { environment } from '../../environments/environment';

import { config as sqliteConfig } from './sqlite.config';
import { config as mysqlConfig } from './mysql.config';
import { TEST_DATA } from './test-data';

const typeOrmOptions = environment.production ? mysqlConfig : sqliteConfig;

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmOptions)],
})
export class DatabaseModule {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {
    if (!environment.production) {
      setTimeout(() => {
        console.log('⚙️  Initializing test data');
        Object.keys(TEST_DATA).forEach( async entityName => {
          const values = TEST_DATA[entityName];
          await this.connection.createQueryBuilder().insert().into(entityName).values(values).execute();
          console.log(`✔️  Test data for entity "${entityName}" initialized`);
        });
      }, 1000);
    }
  }
}
