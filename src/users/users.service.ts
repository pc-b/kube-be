import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma';
import { CreateUserDTO } from './createUser.dto';
import { User } from 'generated/prisma/browser';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

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
}
