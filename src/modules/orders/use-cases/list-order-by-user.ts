import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order-repository';

@Injectable()
export class ListOrderByClientUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string) {
    return await this.orderRepository.listByClient(id);
  }
}
