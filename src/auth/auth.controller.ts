import { Body, Controller, Post, Patch, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDtoLogin, AuthDtoRegister } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("register")
  register(@Body() dto: AuthDtoRegister) {
    return this.authService.register(dto);
  }

  @Post("login")
  login(@Body() dto: AuthDtoLogin) {
    return this.authService.login(dto);
  }
}
