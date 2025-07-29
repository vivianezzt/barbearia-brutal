import { Injectable } from '@nestjs/common';
import Usuario from './usuario';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UsuarioRepositorio {
     constructor(private readonly prisma: PrismaService) {}
    // Método para buscar um usuário pelo ID
    async salvar(usuario: Usuario): Promise<void> {
     await  this.prisma.usuario.upsert({
            where: { id: usuario.id ?? -1 },
            update: usuario,
            create: usuario as any,
       })
    }
    // Método para buscar um usuário pelo email
    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }
}
