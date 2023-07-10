import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsBoolean,
  IsJSON,
} from "class-validator";

export class ProductDto {
  properties: string;

  user_group: string;

  image_url: string;

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

  @IsNotEmpty()
  description: object;

  @IsNotEmpty()
  classify: string;

  // @IsBoolean()
  // @IsNotEmpty()
  // new_arrival: boolean;
}
