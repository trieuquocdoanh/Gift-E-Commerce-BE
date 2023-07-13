import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProductDto } from "./dto";
import { ProductService } from "./product.service";


@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) { }


  @Post("add/new")
  addNewProduct(@Body() dto: ProductDto) {
    return this.productService.addNewProduct(dto);
  }


  @Get("all")
  getAllProduct() {
    return this.productService.getAllProduct();
  }


  @Get("search?")
  searchByName(@Query("classify") classify: string) {
    console.log("classify: ", classify);
    return this.productService.searchByName(classify);
  }


  @Get(":id")
  getProductById(@Param("id") id: number) {
    return this.productService.getProductById(id);
  }
}
