import { CreateDeliverymanDto } from '../dto/create-deliveryman.dto';
import { DeliverymanEntity } from '../entities/deliveryman.entity';

export abstract class DeliverymanRepository {
  abstract create(data: CreateDeliverymanDto): Promise<DeliverymanEntity>;
  abstract findAll(): Promise<DeliverymanEntity[]>;
}
