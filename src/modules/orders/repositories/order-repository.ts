import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderStatusDto } from '../dto/update-order-status.dto';
import { OrderEntity } from '../entities/order.entity';

export abstract class OrderRepository {
  abstract create(data: CreateOrderDto): Promise<OrderEntity>;
  abstract findAll(): Promise<OrderEntity[]>;
  abstract updateOrderStatus(
    id: string,
    status: UpdateOrderStatusDto,
  ): Promise<OrderEntity>;
  abstract listByClient(id: string): Promise<OrderEntity[]>;
  abstract listByDeliveryman(id: string): Promise<OrderEntity[]>;
}
