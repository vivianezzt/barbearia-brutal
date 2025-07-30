import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegistrarUsuario, Usuario } from '@barbearia-brutal/core';
import { UsuarioPrisma } from './usuario.prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly repo: UsuarioPrisma) {}

  @Post('registrar')
  async register(@Body() usuario: Usuario) {
    const casoDeUso = new RegistrarUsuario()
    await casoDeUso.executar(usuario)

    const usuarioExistente = await this.repo.buscarPorEmail(usuario.email);
    if (usuarioExistente) { 
      throw new HttpException('Usuário já existe com este email', 400);
    }
    const novoUsuario = await this.repo.salvar({...usuario, barbeiro: false});
  }
}
