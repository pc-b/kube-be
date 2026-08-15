import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './createUser.dto';
import { User } from 'generated/prisma/browser';
import { UsersService } from './users.service';
import { Logger } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    this.logger.log(id);
    const number_id = parseInt(id);
    return this.usersService.getUser(number_id);
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDTO);
  }
}
