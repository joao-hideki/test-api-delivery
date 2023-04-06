import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { ChangeOrderStatusUseCase } from './use-cases/change-order-status';
import { CreateOrderUseCase } from './use-cases/create-order';
import { ListAllOrdersUseCase } from './use-cases/list-all-orders';
import { ListOrderByDeliveryman } from './use-cases/list-order-by-deliveryman';
import { ListOrderByClientUseCase } from './use-cases/list-order-by-user';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('/orders')
export class OrdersController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private listAllOrdersUseCase: ListAllOrdersUseCase,
    private changeOrderStatusUseCase: ChangeOrderStatusUseCase,
    private listOrderByClientUseCase: ListOrderByClientUseCase,
    private listOrderByDeliverymanUseCase: ListOrderByDeliveryman,
  ) {}

  // create order
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const createdOrder = await this.createOrderUseCase.execute(createOrderDto);
    return createdOrder;
  }

  // find all orders
  @Get()
  async findAll() {
    const orders = await this.listAllOrdersUseCase.execute();
    return orders;
  }

  // find orders by user id
  @Get('/clients/:id')
  async findByClient(@Param('id') id: string) {
    const order = await this.listOrderByClientUseCase.execute(id);
    return order;
  }

  // find orders by deliveryman id
  @Get('/deliverymans/:id')
  async findByDeliveryman(@Param('id') id: string) {
    const order = await this.listOrderByDeliverymanUseCase.execute(id);
    return order;
  }

  // update order status
  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    const order = await this.changeOrderStatusUseCase.execute(
      id,
      updateOrderStatusDto,
    );
    return order;
  }
}
