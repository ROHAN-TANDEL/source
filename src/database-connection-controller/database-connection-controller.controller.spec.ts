import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConnectionControllerController } from './database-connection-controller.controller';

describe('DatabaseConnectionControllerController', () => {
  let controller: DatabaseConnectionControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseConnectionControllerController],
    }).compile();

    controller = module.get<DatabaseConnectionControllerController>(DatabaseConnectionControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
