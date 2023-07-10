import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS USE TO ENABLE DIFFRENT IP CAN USE API PATH
  app.enableCors();

  // SỬ DỤNG GLOBALPIPES ĐỂ VALIDATE FORM DATA GỬI LÊN TỪ USER
  app.useGlobalPipes(
    new ValidationPipe({
      // THẰNG WHITE LIST: TRUE THÌ BÊN BACK END CHỈ NHẬN NHỮNG DATA ĐÃ ĐƯỢC KHAI BÁO
      whitelist: true,
    })
  );

  await app.listen(process.env.PORT || 3002);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
