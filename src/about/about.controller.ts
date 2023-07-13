import { Body, Controller, Get, Post } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutDto } from './dto';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) { }


  @Get()
  getDataAbout() {
    return this.aboutService.getDataAbout();
  }


  @Post('add')
  addDataAbout(@Body() dto: AboutDto) {
    return this.aboutService.addDataAbout(dto);
  }
}
