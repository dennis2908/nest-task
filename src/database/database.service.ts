// src/database/database.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async onModuleInit() {
    await this.connectWithRetry();
  }

  private async connectWithRetry(retries = 5, delay = 3000): Promise<void> {
    try {
      await this.connection.query('SELECT 1');
      console.log('Database connection successful');
    } catch (error) {
      if (retries <= 0) {
        console.error('Database connection failed after retries:', error);
        throw error;
      }
      
      console.log(`Database connection failed. Retrying in ${delay/1000} seconds... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return this.connectWithRetry(retries - 1, delay);
    }
  }
}