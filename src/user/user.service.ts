import { Injectable } from '@nestjs/common';
import { EditUserDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartUser } from './dto';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  getAllUser() {
    return this.prisma.user.findMany();
  }


  async deleteUserById(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return 'XÓA USER THÀNH CÔNG';
    } catch (err) {
      return 'KHÔNG TÌM THẤY ID CỦA USER HOẶC LỖI SERVER';
    }
  }


  async editUserById(id: string, editUserDto: EditUserDto) {
    try {
      await this.prisma.user.update({
        where: { id },
        data: editUserDto,
      });
      return 'CHỈNH SỬA THÔNG TIN USER THÀNH CÔNG';
    } catch (err) {
      ('KHÔNG TÌM THẤY ID CỦA USER HOẶC LỖI SERVER');
    }
  }

  async updateCartUser(id: string, cartUser: []) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: {
          cart: cartUser,
        },
      });
    } catch (err) {
      return `KHONG THE UPDATE THONG TIN SAN PHAM`;
    }
  }

  async getDataCartUserById(id: string) {
    try {
      console.log('id: ', id);
      const user = await this.prisma.user.findUnique({
        where: { id },
      });
      delete user.id;
      delete user.email;
      delete user.user_name;
      delete user.password;
      delete user.createdAt;
      delete user.admin;
      console.log('user: ', user);
      return user;
    } catch (err) {
      return `LẤY DATA CART CỦA USER BẰNG ID`;
    }
  }
}
