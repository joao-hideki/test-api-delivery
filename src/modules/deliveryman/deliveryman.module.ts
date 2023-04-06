import { Module } from '@nestjs/common';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanRepository } from './repositories/deliveryman-repository';
import { PrismaDeliverymanRepository } from './repositories/prisma/prisma-deliveryman-repository';
import { CreateDeliverymanUseCase } from './use-cases/create-deliveryman';
import { ListAllDeliverymansUseCase } from './use-cases/list-all-deliverymans';

@Module({
  controllers: [DeliverymanController],
  providers: [
    CreateDeliverymanUseCase,
    ListAllDeliverymansUseCase,
    {
      provide: DeliverymanRepository,
      useClass: PrismaDeliverymanRepository,
    },
  ],
})
export class DeliverymanModule {}
