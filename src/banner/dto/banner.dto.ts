import { IsArray, IsNotEmpty } from 'class-validator';

export class BannerDto {
  @IsArray()
  @IsNotEmpty()
  banner: [];
}
