import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { ClientsModule } from './modules/client/clients.module';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ProductsModule, ClientsModule, DeliverymanModule, OrdersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
