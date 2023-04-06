import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrderRepository } from './repositories/order-repository';
import { PrismaOrderRepository } from './repositories/prisma/prisma-order-repository';
import { ChangeOrderStatusUseCase } from './use-cases/change-order-status';
import { CreateOrderUseCase } from './use-cases/create-order';
import { ListAllOrdersUseCase } from './use-cases/list-all-orders';
import { ListOrderByDeliveryman } from './use-cases/list-order-by-deliveryman';
import { ListOrderByClientUseCase } from './use-cases/list-order-by-user';

@Module({
  controllers: [OrdersController],
  providers: [
    CreateOrderUseCase,
    ListAllOrdersUseCase,
    ChangeOrderStatusUseCase,
    ListOrderByClientUseCase,
    ListOrderByDeliveryman,
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository,
    },
  ],
})
export class OrdersModule {}
