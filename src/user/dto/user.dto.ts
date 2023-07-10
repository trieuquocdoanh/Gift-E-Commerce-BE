import { IsString, IsNotEmpty, IsNumber, IsArray } from "class-validator";

export class UserCart {
  // @IsString()
  // @IsNotEmpty()
  // user_name: string;

  // @IsString()
  // @IsNotEmpty()
  // password: string;

  @IsArray()
  @IsNotEmpty()
  cart: [];
}

export class CartUser {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  color: string;
}
