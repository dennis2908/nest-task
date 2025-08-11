const mysql = require('mysql2/promise');

const config = {
  host: process.env.DB_HOST || 'mysql',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const maxAttempts = 30;
const delay = 3000;

async function waitForDb() {
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      const connection = await mysql.createConnection(config);
      await connection.execute('SELECT 1');
      await connection.end();
      console.log('Database connection successful!');
      return;
    } catch (err) {
      attempt++;
      console.log(`Attempt ${attempt}/${maxAttempts} failed. Retrying in ${delay/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  console.error('Could not connect to database after multiple attempts');
  process.exit(1);
}

waitForDb();