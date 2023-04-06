import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  home_adress: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(10000000)
  @Max(99999999)
  cep: number;

  @IsNotEmpty()
  @IsNumber()
  home_number: number;
}
