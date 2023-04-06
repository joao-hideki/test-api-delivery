import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { CreateDeliverymanDto } from './dto/create-deliveryman.dto';
// import { UpdateDeliverymanDto } from './dto/update-deliveryman.dto';
import { CreateDeliverymanUseCase } from './use-cases/create-deliveryman';
import { ListAllDeliverymansUseCase } from './use-cases/list-all-deliverymans';

@Controller('/deliverymans')
export class DeliverymanController {
  constructor(
    private createDeliverymanUseCase: CreateDeliverymanUseCase,
    private listAllDeliverymansUseCase: ListAllDeliverymansUseCase,
  ) {}

  // create new deliveryman
  @Post()
  async create(@Body() createDeliverymanDto: CreateDeliverymanDto) {
    const createdDeliveryman = await this.createDeliverymanUseCase.execute(
      createDeliverymanDto,
    );
    return createdDeliveryman;
  }

  // find all deliverymans
  @Get()
  async findAll() {
    const deliverymans = await this.listAllDeliverymansUseCase.execute();
    return deliverymans;
  }
}
