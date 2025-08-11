import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @Column({ type: 'varchar', length: 120 })
  description: string;
}
