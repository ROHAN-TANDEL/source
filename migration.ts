import { DataSource } from "typeorm";
import {Logger as NestLogger} from "@nestjs/common";

NestLogger.log('Running migration: CreateFeatureGroupsTable1762094320226');

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'source_master_daxim',
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations : [
        'src/database/migrations/master/*.ts'
    ],
    //migrationsTableName: "migrations",
});