import { IsNotEmpty, IsString } from 'class-validator';

export class AuthModelDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}