import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsBoolean,
} from "class-validator";

export class ProductDto {
  id: number;

  properties: string;

  user_group: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsArray()
  @IsNotEmpty()
  color: [];

  @IsObject()
  @IsNotEmpty()
  description: object;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  classify: string;

  @IsNotEmpty()
  image_url: object;

  @IsArray()
  @IsNotEmpty()
  comment: [];

  // @IsBoolean()
  // @IsNotEmpty()
  // new_arrival: boolean;
}
