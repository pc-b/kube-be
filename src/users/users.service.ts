import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { User } from 'generated/prisma/browser';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(UsersService.name);

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        username: createUserDTO.username,
        email: createUserDTO.email,
        password: createUserDTO.password,
      },
    });
    return user;
  }

  async getUser(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async updateUser(id: number, updateUserDTO: UpdateUserDTO) {
    this.logger.log(
      `id: ${id}, updateUserDTO: ${JSON.stringify(updateUserDTO)}`,
    );
    await this.prisma.user.update({
      where: { id: id },
      data: {
        ...updateUserDTO,
      },
    });
  }
}
