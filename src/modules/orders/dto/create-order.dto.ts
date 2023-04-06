import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from '../@types/OrderStatus';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  client_id: string;

  @IsString()
  @IsNotEmpty()
  deliveryman_id: string;

  products: [
    {
      quantity: number;
      product_id: string;
    },
  ];

  @IsString()
  @IsNotEmpty()
  @IsEnum(OrderStatus)
  status: string;
}
