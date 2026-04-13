import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthModelDto } from './dto/auth.model.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async login(authModelDto: AuthModelDto) {
        const { username, password } = authModelDto;
        const existingUser = await this.userService.getUser(username);
        if (!existingUser) throw new NotFoundException("username or password is incorrect");
        const isPasswordValid = await this.validatePassword(password, existingUser.password);
        if (!isPasswordValid) throw new NotFoundException("username or password is incorrect");
        return this.Authentification({id: existingUser.id});

    }

    private async validatePassword(password: string, hashPassword: string): Promise<boolean> {
        return await compare(password, hashPassword);
    }

     async getProfile(username: string){
        const user = await this.userService.getUser(username)
        if(!user) throw new NotFoundException("user not found");
        return {username: user.username, email: user.email, firstName: user.firstName, lastName: user.lastName};
     }


    private async Authentification({id}: {id: number}){

        const payload = {id};
        return {access_token: await this.jwtService.sign(payload)}

    }

}
