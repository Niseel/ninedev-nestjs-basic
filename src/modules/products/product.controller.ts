import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus, ResponseMessage } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProducts(),
        HttpStatus.OK,
        ResponseMessage.OK,
      );
    } catch (error) {
      return new ResponseData<Product>(
        this.productService.getProducts(),
        HttpStatus.NOT_FOUND,
        ResponseMessage.NOT_FOUND,
      );
    }
  }

  @Get('/:id')
  getProduct(@Param('id') id: string): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProduct(id),
        HttpStatus.OK,
        ResponseMessage.OK,
      );
    } catch (error) {
      return new ResponseData<Product>(
        this.productService.getProduct(id),
        HttpStatus.NOT_FOUND,
        ResponseMessage.NOT_FOUND,
      );
    }
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) productDto: Product,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.createProduct(productDto),
        HttpStatus.CREATED,
        ResponseMessage.CREATED,
      );
    } catch (error) {
      return new ResponseData<Product>(
        productDto,
        HttpStatus.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }

  @Put('/:id')
  updateProduct(@Body() productDto: Product, @Param('id') id: string): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.updateProduct(productDto, id),
        HttpStatus.OK,
        ResponseMessage.OK,
      );
    } catch (error) {
      return new ResponseData<Product>(
        this.productService.updateProduct(productDto, id),
        HttpStatus.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.productService.deleteProduct(id),
        HttpStatus.OK,
        ResponseMessage.OK,
      );
    } catch (error) {
      return new ResponseData<boolean>(
        this.productService.deleteProduct(id),
        HttpStatus.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }
}
