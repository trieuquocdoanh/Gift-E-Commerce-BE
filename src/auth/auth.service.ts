import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDtoLogin, AuthDtoRegister } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) { }

  async register(dto: AuthDtoRegister) {
    const hashedPassword = await argon.hash(dto.password);
    try {
      await this.prisma.user.create({
        data: {
          user_name: dto.user_name,
          email: dto.email,
          password: hashedPassword,
        },
      });
      return "ĐĂNG KÍ USER MỚI THÀNH CÔNG";
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw new ForbiddenException("TRÙNG EMAIL HOẶC USER NAME");
        }
      }
      throw err;
    }
  }

  async login(dto: AuthDtoLogin) {
    const user = await this.prisma.user.findUnique({
      where: {
        user_name: dto.user_name,
      },
    });
    if (!user) throw new ForbiddenException("KHÔNG TÌM THẤY USER");
    const passwordMatch = await argon.verify(user.password, dto.password);
    if (!passwordMatch) throw new ForbiddenException("MẬT KHẨU KHÔNG ĐÚNG");
    return this.signToken(
      user.id,
      user.email,
      user.user_name,
      user.createdAt,
      user.admin,
      user.active
    );
  }
  async signToken(
    id: string,
    email: string,
    user_name: string,
    createdAt: Date,
    admin: boolean,
    active: boolean
  ): Promise<string> {
    const payload = {
      id,
      email,
      user_name,
      createdAt,
      admin,
      active,
    };
    const secret = this.config.get("JWT_SECRET");
    const token = await this.jwt.signAsync(payload, {
      expiresIn: "1d",
      secret: secret,
    });
    return token;
  }
}
