import { PrismaClient } from '@prisma/client';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { UpdateOrderStatusDto } from '../../dto/update-order-status.dto';
import { OrderEntity } from '../../entities/order.entity';
import { OrderRepository } from '../order-repository';

export class PrismaOrderRepository implements OrderRepository {
  // constructor(private prisma: PrismaService) {}
  private prisma = new PrismaClient();

  async create({
    client_id,
    deliveryman_id,
    status,
    products,
  }: CreateOrderDto): Promise<OrderEntity> {
    return await this.prisma.order.create({
      data: {
        status,
        client_id,
        deliveryman_id,

        products: {
          create: products,
        },
      },
      include: {
        products: {
          select: {
            product: true,
          },
        },
        client: true,
        deliveryman: true,
      },
    });
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.prisma.order.findMany({
      include: {
        client: true,
        products: true,
        deliveryman: true,
      },
    });
  }

  async updateOrderStatus(
    id: string,
    { status }: UpdateOrderStatusDto,
  ): Promise<OrderEntity> {
    return await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
      include: {
        client: true,
        deliveryman: true,
        products: true,
      },
    });
  }

  async listByClient(id: string): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany({
      where: {
        client_id: id,
      },
      include: {
        client: true,
        deliveryman: true,
        products: true,
      },
    });
  }

  async listByDeliveryman(id: string): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany({
      where: {
        deliveryman_id: id,
      },
      include: {
        client: true,
        deliveryman: true,
        products: true,
      },
    });
  }
}
