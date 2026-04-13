import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getTest(@Req() request: Request): string { 
    console.log(`le test est bien passé }`);

    return (`le test est bien passé`);
  }
  
  @Post('users')
  createUser(){
    return "user created successfully";
  }
} 