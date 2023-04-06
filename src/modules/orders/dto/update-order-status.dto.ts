import { IsEnum } from 'class-validator';
import { OrderStatus } from '../@types/OrderStatus';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
