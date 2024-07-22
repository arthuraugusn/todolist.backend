import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from 'dotenv';

config({ path: '.env' });

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

const connect = async () => {
  await pool
    .connect()
    .then((client) => {
      console.log('Connected to database');
    })
    .catch((err) => {
      console.log('Error connecting to database', err.message);
    });
};

connect();

export const db = drizzle(pool);
