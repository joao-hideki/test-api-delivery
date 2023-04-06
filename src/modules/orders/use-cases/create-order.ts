import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderRepository } from '../repositories/order-repository';

@Injectable()
export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(createOrderDto: CreateOrderDto) {
    return await this.orderRepository.create(createOrderDto);
  }
}
