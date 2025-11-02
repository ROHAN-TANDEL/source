import {Controller, Get} from '@nestjs/common';
import { DataSource } from 'typeorm';
import {ConnectionSample} from "../entity";

@Controller('database-connection')
export class DatabaseConnectionControllerController {

  // constructor
  constructor(private dataSource: DataSource) {

  }


  @Get('connect')
  async connectToDatabase() {
    // Implementation for connecting to the database
    const repo = this.dataSource.getRepository(ConnectionSample);
    return repo.find();
  }
}
