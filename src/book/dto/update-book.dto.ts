import {
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
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