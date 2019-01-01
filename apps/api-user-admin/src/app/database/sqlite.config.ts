import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const contexts = (require as any).context('../../', true, /\.entity.ts$/);
const entities = contexts
  .keys()
  .map(modulePath => contexts(modulePath))
  .reduce(
    (result, entityModule) =>
      result.concat(Object.keys(entityModule).map(key => entityModule[key])),
    []
  );

export const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  entities
};
