import { IsNotEmpty, IsNumber, IsString } from 'class-validator';



export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsNotEmpty()
  @IsNumber()
    email: number;
}
