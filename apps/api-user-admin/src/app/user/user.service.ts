import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.insert(createUserDto);
  }
}
