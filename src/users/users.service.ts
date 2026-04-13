import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }
  async create(createUserDto: CreateUserDto) {
    const userHashPassword = await this.hashPassword(createUserDto.password)
    const User = await this.userRepository.create({...createUserDto, password: userHashPassword});
    const saved = await this.userRepository.save(User);
    return saved;
  }

  async getUser(userName: string) {
    return await this.userRepository.findOne(
      {
        where: { username: userName },
        relations: ['transactions'],
      }

    );
  }
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }


  private async  hashPassword(password: string){
    const hashPassword = await hash(password,9);
    return hashPassword;
  }
}
