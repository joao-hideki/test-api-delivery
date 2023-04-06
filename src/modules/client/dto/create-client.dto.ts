import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
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
