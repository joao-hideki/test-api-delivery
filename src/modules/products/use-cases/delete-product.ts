import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product-repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string) {
    await this.productRepository.delete(id);
  }
}
