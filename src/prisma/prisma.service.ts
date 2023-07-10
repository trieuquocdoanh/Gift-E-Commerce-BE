import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
// PrismaService SẼ KẾ THỪA THẰNG PrismaClient
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        // ĐOẠN NÀY CHẮC LÀ ĐỂ CONNECT ĐẾN DATA POSTGRES
        db: {
          url: config.get("DATABASE_URL"),
        },
      },
    });
  }
}
