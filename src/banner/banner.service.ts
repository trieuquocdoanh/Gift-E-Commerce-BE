import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BannerDto } from './dto';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) { }

  getDataBanner() {
    try {
      return this.prisma.banner.findMany();
    } catch (err) {
      return 'LỖI SERVER';
    }
  }


  async addDataBanner(dto: BannerDto) {
    try {
      await this.prisma.banner.create({
        data: {
          banner: dto.banner,
        },
      });


      return 'THÊM DATA BANNER THÀNH CÔNG';
    } catch (err) {
      return 'LỖI SERVER';
    }
  }
}
