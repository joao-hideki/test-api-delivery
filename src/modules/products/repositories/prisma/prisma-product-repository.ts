import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
// import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import { ProductEntity } from '../../entities/product.entity';
import { ProductRepository } from '../product-repository';

export class PrismaProductRepository implements ProductRepository {
  // constructor(private prisma: PrismaService) {}
  private prisma = new PrismaClient();

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany();
  }

  async create({ name, price }: CreateProductDto): Promise<ProductEntity> {
    return await this.prisma.product.create({
      data: {
        id: randomUUID(),
        name,
        price,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
