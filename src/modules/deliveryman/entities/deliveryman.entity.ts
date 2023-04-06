import { Deliveryman } from '@prisma/client';

export class DeliverymanEntity implements Deliveryman {
  id: string;
  name: string;
}
