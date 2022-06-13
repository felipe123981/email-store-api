import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMails1654954967289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(new Table({
        name: 'mails',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'email',
            type: 'varchar'
          }
        ],
      },
      ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('mails');
    }

}
