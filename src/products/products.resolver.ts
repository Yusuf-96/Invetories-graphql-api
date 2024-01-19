import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsType } from './products.type';
import { ProductsService } from './products.service';
import { CreateProductsInput } from './products.input';
import { UpdateProductInput } from './dto/upated-product.input';

@Resolver((of) => ProductsType)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [ProductsType])
  products() {
    return this.productsService.getProducts();
  }

  @Query(() => ProductsType)
  product(@Args('productId') productId: string) {
    return this.productsService.getProduct(productId);
  }

  @Mutation((returns) => ProductsType)
  createProduct(
    @Args('createProductsInput') createProductsInput: CreateProductsInput,
  ) {
    return this.productsService.createProduct(createProductsInput);
  }

  @Mutation((returns) => String)
  async deleteProduct(@Args('productId') productId: string): Promise<string> {
    try {
      await this.productsService.deleteProduct(productId);
      return 'Product successfully deleted.';
    } catch (error) {
      return 'Failed to delete product.';
    }
  }

  @Mutation(() => String)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<string> {
    try {
      await this.productsService.updateProduct(productId, updateProductInput);
      return 'Product successfully updated.';
    } catch (error) {
      return 'Failed to update product.';
    }
  }
}
