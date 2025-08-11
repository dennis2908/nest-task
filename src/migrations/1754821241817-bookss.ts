import { MigrationInterface, QueryRunner } from "typeorm";

export class Bookss1754821241817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE book (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(120) NOT NULL,
                description VARCHAR(120) NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

         await queryRunner.query(`DROP TABLE bookss`);
    }

}
