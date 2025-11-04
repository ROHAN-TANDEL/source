import { DataSource } from "typeorm";
import { Logger as NestLogger } from "@nestjs/common";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

NestLogger.log('Running migration: CreateFeatureGroupsTable1762094320226');

const migrationsPath = __dirname + '/src/database/migrations/master/*{.ts,.js}';

NestLogger.log(`Loading migration from: ${migrationsPath}`);

// export const AppDataSource = new DataSource({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: '',
//     database: 'source_master_daxim',
//     synchronize: false,
//     migrations : [migrationsPath],
// });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "source_master_daxim",
    synchronize: false, // always false in migrations!
    migrations: [migrationsPath],
});
