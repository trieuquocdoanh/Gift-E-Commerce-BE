import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AboutModule } from './about/about.module';
import { BannerModule } from './banner/banner.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AboutModule,
    BannerModule,
  ],
})
export class AppModule { }
