import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//db services connection test
import { DatabaseConnectionControllerController as DatabaseConnectionController } from './database-connection-controller/database-connection-controller.controller';

//import db for postgresql connection
import { TypeOrmModule } from "@nestjs/typeorm";

//import entity
import { ConnectionSample } from './entity';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'source_master_daxim',
     // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [ConnectionSample],
      synchronize: true,
      migrations : [
        __dirname + '/database/migrations/master/*{.ts,.js}'
      ],
      migrationsTableName: "migrations",
    }),
    UsersModule
  ],
  controllers: [AppController, DatabaseConnectionController],
  providers: [AppService],
})
export class AppModule {}
