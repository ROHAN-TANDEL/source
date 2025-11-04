import { MigrationInterface, QueryRunner } from "typeorm";
import {Logger as NestLogger} from "@nestjs/common";

export class CreateFeatureGroupsTable1762094320226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       NestLogger.log('Running migration');
       const finTableExists = await queryRunner.hasTable('feature_groups');
        if (!finTableExists) {
            await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS "feature_groups" (
                    "id" BIGSERIAL PRIMARY KEY,
                    "name" VARCHAR(200) NOT NULL,
                    "code" VARCHAR(250) NOT NULL,
                    "is_active" BOOLEAN DEFAULT TRUE NOT NULL,
                    "feature_group_id" BIGINT NOT NULL,
                    "created_at" TIMESTAMP NULL,
                    "updated_at" TIMESTAMP NULL,
                    "level" SMALLINT NOT NULL,
                    CONSTRAINT "fk_feature_groups_parent"
                    FOREIGN KEY ("feature_group_id") REFERENCES "feature_groups"("id")
                    ON DELETE NO ACTION ON UPDATE NO ACTION
                    );
            `);
      }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const finTableName = "feature_groups";
        const finTableExists = await queryRunner.hasTable(finTableName);
        if (finTableExists) {
            await queryRunner.dropTable(finTableName);
        }
    }

}

