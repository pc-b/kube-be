import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
