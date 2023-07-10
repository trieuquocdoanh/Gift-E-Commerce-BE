import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { OrderService } from "./order.service";

// KHIÊN PHẢI CÓ ACCESS TOKEN GỬI LÊN MỚI PASS MỚI CÓ DATA TRẢ VỀ
// @UseGuards(JwtGuard)
@Controller("orders")
export class OrderController {
  constructor(private orderService: OrderService) {}

  // GET ALL USER
  @Get("all")
  getAllOrder() {
    return this.orderService.getAllOrder();
  }

  @Get("user/:id")
  getOrderByUserId(@Param("id") id: string) {
    return this.orderService.getOrderByUserId(id);
  }

  // DELETE ORDER
  @Delete("delete/:id")
  deleteOrderById(@Param("id") id: string) {
    return this.orderService.deleteOrderById(id);
  }

  @Post()
  createOrder(@Body() dto: any) {
    return this.orderService.createOrder(dto);
  }

  @Patch()
  updateStatusOrder(@Body() dto: any) {
    return this.orderService.updateStatusOrder(dto);
  }

  // // EDIT ORDER

  // @Patch("cart/:id")
  // updateCartOrder(@Param("id") id: string, @Body() cartOrder: any) {
  //   return this.orderService.updateCartOrder(id, cartOrder);
  // }
}
