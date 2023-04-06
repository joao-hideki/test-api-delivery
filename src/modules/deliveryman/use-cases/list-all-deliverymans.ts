import { Injectable } from '@nestjs/common';
import { DeliverymanRepository } from '../repositories/deliveryman-repository';

@Injectable()
export class ListAllDeliverymansUseCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute() {
    return await this.deliverymanRepository.findAll();
  }
}
