import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

// CONTROLLER XỬ LÍ LOGIC CỦA USER
@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  // GET ALL USER
  getAllOrder() {
    return this.prisma.order.findMany();
  }

  // DELETE USER BY ID
  async deleteOrderById(id: string) {
    try {
      await this.prisma.order.delete({ where: { id } });
      return "XÓA ORDER THÀNH CÔNG";
    } catch (err) {
      return "KHÔNG TÌM THẤY ID CỦA ORDER HOẶC LỖI SERVER";
    }
  }

  async getOrderByUserId(id: string) {
    try {
      return await this.prisma.order.findMany({
        where: {
          user_id: id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async createOrder({ data }: any) {
    const { userInfo, item, address, phoneNumber, userName } = data;

    try {
      Promise.all(
        item.map(async (i: any) => {
          await this.prisma.product.update({
            where: {
              id: i.id,
            },
            data: {
              quantity: {
                decrement: i.quantity,
              },
            },
          });
        })
      );

      await this.prisma.order.create({
        data: {
          user_id: userInfo.id || "",
          orderDetail: item,
          status: "PENDING",
          infomation: { address, phoneNumber, userName },
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateStatusOrder({ data }: any) {
    try {
      await this.prisma.order.update({
        where: { id: data.id },
        data: {
          status: data.status,
        },
      });
    } catch (err) {
      return `KHONG THE UPDATE THONG TIN SAN PHAM`;
    }
  }
}
