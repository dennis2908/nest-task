import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available everywhere
      envFilePath: '.env', // Explicitly specify .env file path
      load: [typeorm]
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      entities: ["src/entity/**/*{.js,.ts}"],
      migrations: ["src/migration/**/*{.js,.ts}"],
      synchronize: false,
      migrationsRun: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
