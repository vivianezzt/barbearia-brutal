import { Body, Controller, HttpException, Post } from '@nestjs/common';
import Usuario from './usuario';
import { UsuarioRepositorio } from './usuario.repositorio';

@Controller('auth')
export class AuthController {
  constructor(private readonly repo: UsuarioRepositorio) {}

  @Post('registrar')
  async register(@Body() usuario: Usuario) {
    const usuarioExistente = await this.repo.buscarPorEmail(usuario.email);
    if (usuarioExistente) { 
      throw new HttpException('Usuário já existe com este email', 400);
    }
    const novoUsuario = await this.repo.salvar({...usuario, barbeiro: false});
  }
}
