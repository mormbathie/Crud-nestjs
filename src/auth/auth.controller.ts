import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { AuthModelDto } from './dto/auth.model.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async getAuth(@Body() authDto : AuthModelDto){
        const data = await this.authService.login(authDto);
        return data;
    }
    
}
