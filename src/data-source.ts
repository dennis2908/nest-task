import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql', // or 'postgres', 'sqlite', etc.
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entity/**/*{.js,.ts}"],
  migrations: ["src/migration/**/*{.js,.ts}"],
  synchronize: false, // Set to false in production to prevent data loss
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;