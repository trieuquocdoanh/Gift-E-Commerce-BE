import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { EditUserDto } from 'src/auth/dto';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('cart/:id')
  getDataCartUserById(@Param('id') id: string) {
    return this.userService.getDataCartUserById(id);
  }

  @Delete('delete/:id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }

  @Patch('edit/:id')
  editUserById(@Param('id') id: string, @Body() editUserDto: EditUserDto) {
    return this.userService.editUserById(id, editUserDto);
  }

  @Patch('cart/:id')
  updateCartUser(@Param('id') id: string, @Body() cartUser: any) {
    return this.userService.updateCartUser(id, cartUser);
  }
}
