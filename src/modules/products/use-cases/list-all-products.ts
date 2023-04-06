import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product-repository';

@Injectable()
export class ListAllProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute() {
    return await this.productRepository.findAll();
  }
}
