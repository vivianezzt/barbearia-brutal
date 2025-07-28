import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [AuthController],
  imports: [DbModule],
})
export class AuthModule {}
