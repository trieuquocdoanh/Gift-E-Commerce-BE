import { IsString, IsNotEmpty, IsNumber, IsArray } from "class-validator";

export class UserCart {

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
