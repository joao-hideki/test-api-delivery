import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientUseCase } from './use-cases/create-client';
import { ListAllClientsUseCase } from './use-cases/list-all-clients';
import { UpdateClientUseCase } from './use-cases/update-client';

@Controller('/clients')
export class ProductsController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private listAllClientsUseCase: ListAllClientsUseCase,
    private updateClientUseCase: UpdateClientUseCase,
  ) {}

  // create new client
  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const createdClient = await this.createClientUseCase.execute(
      createClientDto,
    );
    return createdClient;
  }

  // find all clients
  @Get()
  async findAll() {
    const clients = await this.listAllClientsUseCase.execute();
    return clients;
  }

  // update client
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateClientDto) {
    const client = this.updateClientUseCase.execute(id, updateProductDto);
    return client;
  }
}
