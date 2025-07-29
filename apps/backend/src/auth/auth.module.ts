import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { UsuarioRepositorio } from './usuario.repositorio';

@Module({
  controllers: [AuthController],
  imports: [DbModule],
  providers: [UsuarioRepositorio],
})
export class AuthModule {}
