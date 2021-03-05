// import { dotenv } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const db: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  entities: ['dist/**/*.entity{.ts, .js'],
  migrationsTableName: 'migration',
  migrations: ['dist/migration/*{.ts,.js'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/migration',
  },
};
