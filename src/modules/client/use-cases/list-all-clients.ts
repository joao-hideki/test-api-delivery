import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class ListAllClientsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute() {
    return this.clientRepository.findAll();
  }
}
