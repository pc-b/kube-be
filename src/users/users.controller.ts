import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { User } from 'generated/prisma/browser';
import { Logger } from '@nestjs/common';
import { UsersService } from './users.service';
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
  async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    try {
      this.logger.log(`createUser called, username: ${createUserDTO.username}`);
      this.logger.log(
        `attempting to create a user, username: ${createUserDTO.username}`,
      );
      const user = await this.usersService.create(createUserDTO);
      this.logger.log(`user created, id: ${user.id}`);
      return user;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.log(`failed to create a user, error: ${message}`);
    }
    return this.usersService.create(createUserDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    const number_id = parseInt(id);
    this.logger.log(
      `attempting to update user with id: ${id}, updateUserDTO: ${updateUserDTO.username}`,
    );
    void this.usersService.updateUser(number_id, updateUserDTO);
    return;
  }
}
