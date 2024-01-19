import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductsInput } from './products.input';
import { v4 as uuid } from 'uuid';
import { UpdateProductInput } from './dto/upated-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRespository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = this.productRespository.find();

    return products;
  }

  async getProduct(productId: string): Promise<Product | string> {
    try {
      const product = this.productRespository.findOneBy({ productId });
      return product;
    } catch (error) {
      return 'not found';
    }
  }

  async createProduct(
    createProductInput: CreateProductsInput,
  ): Promise<Product> {
    const {
      productName,
      productDescription,
      buyingPrice,
      sellingPrice,
      createdDate,
      updatedDate,
    } = createProductInput;

    const product = this.productRespository.create({
      productId: uuid(),
      productName,
      productDescription,
      buyingPrice,
      sellingPrice,
      createdDate,
      updatedDate,
    });

    return this.productRespository.save(product);
  }

  async deleteProduct(productId: string): Promise<void> {
    await this.productRespository.delete({ productId });
  }

  async updateProduct(
    productId: string,
    updateProductInput: UpdateProductInput,
  ): Promise<void> {
    try {
    } catch (error) {}
    const existingProduct = await this.productRespository.findOneBy({
      productId,
    });

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${productId} not found.`);
    }

    Object.keys(updateProductInput).map((key) => {
      existingProduct[key] = updateProductInput[key];
    });

    await this.productRespository.save(existingProduct);
  }
}
