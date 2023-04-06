import { CreateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';

export abstract class ProductRepository {
  abstract create(data: CreateProductDto): Promise<ProductEntity>;
  abstract findAll(): Promise<ProductEntity[]>;
  abstract delete(id: string): Promise<void>;
}
