import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';

describe('Role Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RoleController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: RoleController = module.get<RoleController>(RoleController);
    expect(controller).toBeDefined();
  });
});
