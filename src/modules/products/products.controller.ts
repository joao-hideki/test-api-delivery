import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductUseCase } from './use-cases/create-product';
import { DeleteProductUseCase } from './use-cases/delete-product';
import { ListAllProductsUseCase } from './use-cases/list-all-products';

@Controller('/products')
export class ProductsController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private listAllProductsUseCase: ListAllProductsUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
  ) {}

  // create new product
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const createdProduct = await this.createProductUseCase.execute(
      createProductDto,
    );
    return createdProduct;
  }

  // find all products
  @Get()
  async findAll() {
    const products = await this.listAllProductsUseCase.execute();
    return products;
  }

  // delete product by id
  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.deleteProductUseCase.execute(id);
  }
}
