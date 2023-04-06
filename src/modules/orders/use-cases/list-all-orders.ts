import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order-repository';

@Injectable()
export class ListAllOrdersUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    return await this.orderRepository.findAll();
  }
}
