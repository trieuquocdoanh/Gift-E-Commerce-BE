import { Body, Controller, Get, Post } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerDto } from './dto';

@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) { }


  @Get()
  getDataBanner() {
    return this.bannerService.getDataBanner();
  }


  @Post('add')
  addDataBanner(@Body() dto: BannerDto) {
    return this.bannerService.addDataBanner(dto);
  }
}
