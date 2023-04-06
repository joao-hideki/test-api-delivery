import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  home_adress: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;

  @IsNotEmpty()
  @IsNumber()
  home_number: number;
}
