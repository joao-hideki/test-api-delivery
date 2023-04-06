import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductUseCase } from './use-cases/create-product';
import { ProductRepository } from './repositories/product-repository';
import { PrismaProductRepository } from './repositories/prisma/prisma-product-repository';
import { ListAllProductsUseCase } from './use-cases/list-all-products';
import { DeleteProductUseCase } from './use-cases/delete-product';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    CreateProductUseCase,
    ListAllProductsUseCase,
    DeleteProductUseCase,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductsModule {}
