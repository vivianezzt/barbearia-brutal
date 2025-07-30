import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { UsuarioPrisma } from './usuario.prisma';

@Module({
  controllers: [AuthController],
  imports: [DbModule],
  providers: [UsuarioPrisma],
})
export class AuthModule {}
