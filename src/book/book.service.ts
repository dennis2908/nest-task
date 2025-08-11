import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  /**
   * this is function is used to create User in User Entity.
   * @param CreateBookDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  createBook(CreateBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.title = CreateBookDto.title;
    book.description = CreateBookDto.description;
    return this.bookRepository.save(book);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllBook(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
  viewBook(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.title = updateBookDto.title;
    book.description = updateBookDto.description;
    return this.bookRepository.save(book);
  }

  /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  removeBook(id: number): Promise<{ affected?: number }> {
    return this.bookRepository.delete(id);
  }
}
