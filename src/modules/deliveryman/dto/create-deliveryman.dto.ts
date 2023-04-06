import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliverymanDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
