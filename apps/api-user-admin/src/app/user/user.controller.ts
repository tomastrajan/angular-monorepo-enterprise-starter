import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id', required: true })
  findById(@Param('id') id: number) {
    return this.userService.findById(id);
  }

  @Post()
  @ApiImplicitBody({ name: 'createUserDto', type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.create(createUserDto);
    return result.identifiers[0];
  }
}
