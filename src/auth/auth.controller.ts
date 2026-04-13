import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import  { AuthModelDto } from './dto/auth.model.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async getAuth(@Body() authDto : AuthModelDto){
        const data = await this.authService.login(authDto);
        return data;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req){
        return this.authService.getProfile(req.user.username);

    }
}
