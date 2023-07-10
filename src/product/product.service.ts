import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductDto } from "./dto";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // GET ALL PRODUCT
  getAllProduct() {
    return this.prisma.product.findMany({
      orderBy: { id: "asc" },
    });
  }

  // GET PRODUCT BY ID
  getProductById(id: number) {
    const parseId = +id;
    return this.prisma.product.findUnique({
      where: { id: parseId },
    });
  }

  // SEARCH PRODUCTS BY NAME
  searchByName(classify: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: classify,
          mode: "insensitive",
        },
      },
    });
  }

  async updateProduct(id: any, product: any) {
    try {
      await this.prisma.product.update({
        where: { id: +id },
        data: product,
      });
      return "Update Product Success";
    } catch (err) {
      console.log("err", err);
      return "Update Product Failed";
    }
  }

  // ADD NEW PRODUCT
  async addNewProduct(dto: any) {
    try {
      await this.prisma.product.create({
        data: dto,
      });

      // RETURN TEXT
      return "THÊM SẢN PHẨM MỚI THÀNH CÔNG";
    } catch (err) {
      console.log("err", err);
      return "LỖI SERVER";
    }
  }
}
