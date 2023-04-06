import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { ClientEntity } from '../entities/client.entity';

export abstract class ClientRepository {
  abstract create(data: CreateClientDto): Promise<ClientEntity>;
  abstract findAll(): Promise<ClientEntity[]>;
  abstract update(id: string, data: UpdateClientDto): Promise<ClientEntity>;
}
