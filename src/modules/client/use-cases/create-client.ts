import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(createClientDto: CreateClientDto) {
    return await this.clientRepository.create(createClientDto);
  }
}
