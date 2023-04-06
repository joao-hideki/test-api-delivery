import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from '../dto/update-client.dto';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class UpdateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: string, updateClientDto: UpdateClientDto) {
    return await this.clientRepository.update(id, updateClientDto);
  }
}
