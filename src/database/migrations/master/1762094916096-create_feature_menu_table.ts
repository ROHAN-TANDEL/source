import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFeatureMenuTable1762094916096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const finTableExists = await queryRunner.hasTable('feature_menu');
        if (!finTableExists) {
            await queryRunner.createTable(
                new Table({
                 name : "feature_menu",
                    columns : [
                        {
                            name : "id",
                            type : "bigserial",
                            isPrimary : true
                        },
                        {
                            name : "name",
                            type : "varchar",
                            length : "200",
                            isNullable : false
                        },
                        {
                            name : "code",
                            type : "varchar",
                            length : "250",
                            isNullable : false
                        },
                        {
                            name : "description",
                            type : "varchar",
                            length : "512",
                            isNullable : true
                        },
                        {
                            name : "is_active",
                            type : "boolean",
                            isNullable : false,
                            default : true
                        },
                        {
                            name : "menu_uri",
                            type : "varchar",
                            length : "250",
                            isNullable : true
                        },
                        {
                            name : "feature_menu_id",
                            type : "bigint",
                            isNullable : true
                        },
                        {
                            name : "created_at",
                            type : "timestamp",
                            isNullable : true
                        },
                        {
                            name : "updated_at",
                            type : "timestamp",
                            isNullable : true
                        },
                        {
                            name : "display_order",
                            type : "int",
                            isNullable : true
                        },
                        {
                            name : "home_page_priority",
                            type : "smallint",
                            isNullable : true
                        },
                        {
                            name : "icon",
                            type : "varchar",
                            length : "250",
                            isNullable : true
                        },
                        {
                            name : "menu_type",
                            type : "varchar",
                            length : "25",
                            isNullable : true
                        }
                    ],
                    foreignKeys : [
                        {
                            columnNames : ["feature_menu_id"],
                            referencedTableName : "feature_menu",
                            referencedColumnNames : ["id"],
                            onDelete : "NO ACTION",
                            onUpdate : "NO ACTION",
                            name : "fk_feature_menu_parent"
                        }
                    ]
                })
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const finTableName = "feature_menu";
        const finTableExists = await queryRunner.hasTable(finTableName);
        if (finTableExists) {
            await queryRunner.dropTable(finTableName);
        }
    }

}
