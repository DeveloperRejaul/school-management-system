/* eslint-disable @typescript-eslint/no-explicit-any */
import { IsEnum, IsNotEmpty,IsOptional,IsString , IsArray,IsUUID, IsEmail, IsBoolean} from 'class-validator';
import { UserRoleEnum } from './UserRole';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
    name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
    email: string;

  @ApiProperty()
  @IsNotEmpty()
    password: string;

  @ApiProperty({
    enum: UserRoleEnum,
    enumName: 'UserRoleEnum',
    description: 'Role of the user',
    example: UserRoleEnum.ADMIN,
  })
  @IsEnum(UserRoleEnum)
    role:UserRoleEnum;

  @ApiPropertyOptional({ type: [String], description: 'Array of school IDs (UUIDs)' })
  @IsArray()
  @IsOptional()
  @IsUUID('4', { each: true })
    schoolIds: string[];
}


export class CreateUserWithFileDto extends CreateUserDto {
  @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
}


export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
    email:string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
    password:string;

  @IsOptional()
  @IsBoolean() 
  @ApiProperty()
    remember?:boolean;
}