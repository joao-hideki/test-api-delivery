import { Injectable } from '@nestjs/common';
import { UpdateOrderStatusDto } from '../dto/update-order-status.dto';
import { OrderRepository } from '../repositories/order-repository';

@Injectable()
export class ChangeOrderStatusUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string, updateOrderStatus: UpdateOrderStatusDto) {
    return await this.orderRepository.updateOrderStatus(id, updateOrderStatus);
  }
}
