import { PrismaClient } from '@prisma/client';
// import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { ClientEntity } from '../../entities/client.entity';
import { ClientRepository } from '../client-repository';

export class PrismaClientRepository implements ClientRepository {
  // constructor(private prisma: PrismaService) {}
  private prisma = new PrismaClient();

  async create({
    name,
    home_adress,
    home_number,
    cep,
  }: CreateClientDto): Promise<ClientEntity> {
    return await this.prisma.client.create({
      data: {
        name,
        home_adress,
        cep,
        home_number,
      },
    });
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.prisma.client.findMany();
  }

  async update(id: string, data: UpdateClientDto): Promise<ClientEntity> {
    return await this.prisma.client.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }
}
