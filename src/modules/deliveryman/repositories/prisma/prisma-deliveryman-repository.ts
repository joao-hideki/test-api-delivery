import { PrismaClient } from '@prisma/client';
import { CreateDeliverymanDto } from '../../dto/create-deliveryman.dto';
import { DeliverymanEntity } from '../../entities/deliveryman.entity';
import { DeliverymanRepository } from '../deliveryman-repository';

export class PrismaDeliverymanRepository implements DeliverymanRepository {
  // constructor(private prisma: PrismaService) {}
  private prisma = new PrismaClient();

  async create({ name }: CreateDeliverymanDto): Promise<DeliverymanEntity> {
    return this.prisma.deliveryman.create({
      data: {
        name,
      },
    });
  }

  async findAll(): Promise<DeliverymanEntity[]> {
    return await this.prisma.deliveryman.findMany();
  }
}
