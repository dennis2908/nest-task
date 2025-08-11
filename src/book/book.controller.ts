import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('tasks')
@Controller('tasks')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAllBook();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.viewBook(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.removeBook(+id);
  }
}
