import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { CreateClientUseCase } from './use-cases/create-client';
import { ClientRepository } from './repositories/client-repository';
import { PrismaClientRepository } from './repositories/prisma/prisma-client-repository';
import { ListAllClientsUseCase } from './use-cases/list-all-clients';
import { UpdateClientUseCase } from './use-cases/update-client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ClientsController],
  providers: [
    CreateClientUseCase,
    ListAllClientsUseCase,
    UpdateClientUseCase,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
  ],
})
export class ClientsModule {}
