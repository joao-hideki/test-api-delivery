import { Client } from '@prisma/client';

export class ClientEntity implements Client {
  id: string;
  name: string;
  cep: string;
  home_number: number;
  home_adress: string;
}
