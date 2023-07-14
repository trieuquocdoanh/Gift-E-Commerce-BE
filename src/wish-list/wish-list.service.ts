import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class WishListService {
  constructor(private prisma: PrismaService) {}

  getAllWishList() {
    return this.prisma.wishList.findMany();
  }
  async getAllWishListByUser(userId: any) {
    console.log("userId", userId);
    const res = await this.prisma.wishList.findMany({
      where: { userId: userId },
      select: {
        product_id: true,
      },
    });

    const arrayId = res.map((obj) => obj.product_id);
    try {
      const favList = await this.prisma.product.findMany({
        where: {
          id: { in: arrayId },
        },
      });
      return favList;
    } catch (err) {
      console.log(err);
    }
  }

  async createItemWishList(data: any) {
    console.log("data", data);
    try {
      const res = await this.prisma.wishList.create({
        data: {
          userId: data.userId,
          product_id: data.id,
        },
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteWishListById(data) {
    const { userId } = data;
    try {
      const { id } = await this.prisma.wishList.findFirst({
        where: {
          userId,
          product_id: data.id,
        },
        select: {
          id: true,
        },
      });
      await this.prisma.wishList.delete({
        where: {
          id,
        },
      });
      return "XÓA THÀNH CÔNG";
    } catch (err) {
      return "KHÔNG TÌM THẤY ID HOẶC LỖI SERVER";
    }
  }

  // async getWishListByUserId(id: string) {
  //   try {
  //     return await this.prisma.order.findMany({
  //       where: {
  //         user_id: id,
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async createWishList({ data }: any) {
  //   const { userInfo, item, address, phoneNumber, userName } = data;
  //   try {
  //     await this.prisma.order.create({
  //       data: {
  //         user_id: userInfo.id || "",
  //         orderDetail: item,
  //         status: "PENDING",
  //         infomation: { address, phoneNumber, userName },
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async updateStatusWishList({ data }: any) {
  //   try {
  //     await this.prisma.order.update({
  //       where: { id: data.id },
  //       data: {
  //         status: data.status,
  //       },
  //     });
  //   } catch (err) {
  //     return `KHONG THE UPDATE THONG TIN SAN PHAM`;
  //   }
  // }
}
