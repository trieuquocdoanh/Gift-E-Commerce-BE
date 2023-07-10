import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AboutDto {
  @IsString()
  @IsNotEmpty()
  image_banner: string;

  @IsArray()
  @IsNotEmpty()
  information: [];

  @IsString()
  @IsNotEmpty()
  our_team: string;

  @IsString()
  @IsNotEmpty()
  meet_our_team: string;

  @IsArray()
  @IsNotEmpty()
  member: [];
}
