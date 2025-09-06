 
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail,IsString } from 'class-validator';



export class CreateStudentDto {
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