/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail,IsString } from 'class-validator';



export class CreateClassDto {
  @ApiProperty()
  @IsString()
    name: string;

  @ApiProperty()
  @IsEmail()
    email: string;

  @ApiProperty()
  @IsString()
    title: string;  
    
  @ApiProperty()
  @IsString()
    subTitle: string;
  
  @ApiProperty()
  @IsString()
    slogan: string;
}

