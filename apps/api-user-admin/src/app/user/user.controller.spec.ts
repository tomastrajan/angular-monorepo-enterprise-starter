import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('User Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [{ provide: UserService, useValue: {} }],
      controllers: [UserController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UserController = module.get<UserController>(UserController);
    expect(controller).toBeDefined();
  });
});
