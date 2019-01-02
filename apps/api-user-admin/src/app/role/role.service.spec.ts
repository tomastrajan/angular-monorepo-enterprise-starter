import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';

import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: 'RoleRepository', useClass: Repository },
        RoleService
      ]
    }).compile();
    service = module.get<RoleService>(RoleService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
