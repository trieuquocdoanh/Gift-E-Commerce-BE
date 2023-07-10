import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// KHI KHAI BÁO THẰNG GLOBAL Ở ĐÂY THÌ KHÔNG PHẢI KHAI BÁO TRONG THẰNG NÀO NỮA
@Global()
@Module({
  providers: [PrismaService],
  // ĐOẠN NÀY PHẢI EXPORT THẰNG PRISMA SERVICE KHÔNG LÚC IMPORT VÀO THẰNG AUTH MODULE SẼ BỊ LỖI
  exports: [PrismaService],
})
export class PrismaModule {}
