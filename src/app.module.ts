import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PrismaService } from 'prisma/prisma';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
