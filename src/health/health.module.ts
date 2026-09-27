import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HealthController],
  imports: [TerminusModule, PrismaModule],
})
export class HealthModule {}
