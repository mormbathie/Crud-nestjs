import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthModelDto } from './dto/auth.model.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async login(authModelDto: AuthModelDto) {
        const { username, password } = authModelDto;
        const existingUser = await this.userService.getUser(username);
        if (!existingUser) throw new NotFoundException("username or password is incorrect");
        const isPasswordValid = await this.validatePassword(password, existingUser.password);
        if (!isPasswordValid) throw new NotFoundException("username or password is incorrect");
        return {existingUser, message: "login successful"};

    }

    private async validatePassword(password: string, hashPassword: string): Promise<boolean> {
        return await compare(password, hashPassword);
    }

}
