import { Order } from '@prisma/client';

export class OrderEntity implements Order {
  id: string;
  client_id: string;
  deliveryman_id: string;
  status: string;
}
