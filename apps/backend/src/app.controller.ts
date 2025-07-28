import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './db/prisma.service';

interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  telefone?: string;
  barbeiro?: boolean;
}

@Controller('auth') // se quiser usar /auth/register
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('register')
  async register(@Body() usuario: Usuario) {
    const novoUsuario = await this.prismaService.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha ?? '',
        telefone: usuario.telefone ?? '',
        barbeiro: usuario.barbeiro || false, // corrigido aqui
      },
    });

    return {
      message: 'Usuário registrado com sucesso',
      usuario: novoUsuario,
    };
  }
}
