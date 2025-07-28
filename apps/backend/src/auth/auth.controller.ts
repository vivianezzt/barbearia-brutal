import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    // funcao responsavel pelo login
    @Post('login')
    async login() {
        return 'Login successful';
    }
    // funcao responsavel pelo registro
}
