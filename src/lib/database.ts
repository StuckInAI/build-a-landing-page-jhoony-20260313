import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Subscriber } from '@/entities/Subscriber';
import path from 'path';

const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.resolve('./data/app.db');

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: dbPath,
  synchronize: true,
  logging: false,
  entities: [Subscriber],
  migrations: [],
  subscribers: [],
});

let initialized = false;

export async function getDatabase(): Promise<DataSource | null> {
  if (initialized && AppDataSource.isInitialized) {
    return AppDataSource;
  }

  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    initialized = true;
    return AppDataSource;
  } catch (error) {
    console.warn('Database initialization failed (non-critical):', error);
    return null;
  }
}
