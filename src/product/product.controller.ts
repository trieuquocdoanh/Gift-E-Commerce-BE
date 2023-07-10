import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from "@nestjs/common";
import { ProductDto } from "./dto";
import { ProductService } from "./product.service";

// ROUTES CỦA PRODUCT
@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  // ADD NEW PRODUCT
  @Post()
  addNewProduct(@Body() dto: any) {
    return this.productService.addNewProduct(dto);
  }

  // GET ALL PRODUCT
  @Get("all")
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  // SEARCH BY NAME
  @Get("search?")
  searchByName(@Query("classify") classify: string) {
    console.log("classify: ", classify);
    return this.productService.searchByName(classify);
  }

  // GET PRODUCT BY ID
  @Get(":id")
  getProductById(@Param("id") id: number) {
    return this.productService.getProductById(id);
  }

  @Patch(":id")
  updateProduct(@Param("id") id: number, @Body() params: any) {
    console.log("id", id);
    return this.productService.updateProduct(id, params);
  }
}
