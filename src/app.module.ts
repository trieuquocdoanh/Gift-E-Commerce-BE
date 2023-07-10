import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { AboutModule } from "./about/about.module";
import { BannerModule } from "./banner/banner.module";
import { OrderModule } from "./order/order.module";
import { WishListModule } from "./wish-list/wish-list.module";

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
    OrderModule,
    WishListModule,
  ],
})
export class AppModule {}
