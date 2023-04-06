import { Injectable } from '@nestjs/common';
import { CreateDeliverymanDto } from '../dto/create-deliveryman.dto';
import { DeliverymanRepository } from '../repositories/deliveryman-repository';

@Injectable()
export class CreateDeliverymanUseCase {
  constructor(private deliverymanRepository: DeliverymanRepository) {}

  async execute(createDeliverymanDto: CreateDeliverymanDto) {
    return this.deliverymanRepository.create(createDeliverymanDto);
  }
}
