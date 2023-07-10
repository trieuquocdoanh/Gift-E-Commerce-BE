import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AboutDto } from './dto';

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}
  // GET DATA ABOUT
  getDataAbout() {
    try {
      return this.prisma.about.findMany();
    } catch (err) {
      return 'LỖI SERVER';
    }
  }

  // ADD DATA ABOUT
  async addDataAbout(dto: AboutDto) {
    try {
      await this.prisma.about.create({
        data: {
          image_banner: dto.image_banner,
          information: dto.information,
          our_team: dto.our_team,
          meet_our_team: dto.meet_our_team,
          member: dto.member,
        },
      });

      // RETURN
      return 'THÊM DATA ABOUT THÀNH CÔNG';
    } catch (err) {
      return 'LỖI SERVER';
    }
  }
}
