import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './createUser.dto';
import { User } from 'generated/prisma/browser';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string {
    return 'This gets all users';
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This gets one user: ${id}`;
  }
}
