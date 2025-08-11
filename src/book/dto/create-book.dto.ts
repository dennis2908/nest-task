import {
  IsOptional,
  IsNotEmpty,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    example: 'ini judul',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'ini deskripsi',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  description: string;
}
