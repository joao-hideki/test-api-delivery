import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateClientDto } from '../dto/create-client.dto';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class CreateClientUseCase {
  constructor(
    private clientRepository: ClientRepository,
    private httpService: HttpService,
  ) {}

  async execute(createClientDto: CreateClientDto) {
    const { cep, home_adress } = createClientDto;

    if (!home_adress) {
      const response = await lastValueFrom(
        this.httpService.get(`https://viacep.com.br/ws/${cep}/json`),
      );

      createClientDto.home_adress = response.data.logradouro;
    }

    return await this.clientRepository.create(createClientDto);
  }
}
