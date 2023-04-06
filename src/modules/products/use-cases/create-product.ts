import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductRepository } from '../repositories/product-repository';

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }
}
