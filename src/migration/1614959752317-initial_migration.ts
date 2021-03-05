import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1614959752317 implements MigrationInterface {
  name = 'initialMigration1614959752317';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "series" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "original_run" text, "image_url" text, "episode_count" integer, CONSTRAINT "UQ_68b808a9039892c61219f868f2a" UNIQUE ("name"), CONSTRAINT "PK_e725676647382eb54540d7128ba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "characters" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "image_url" text, "debut" text, "race" text, "gender" text, "height" text, "weight" text, "occupation" text, CONSTRAINT "UQ_86a2bcc85e3473ecf3693dfe5a1" UNIQUE ("name"), CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "characters"`);
    await queryRunner.query(`DROP TABLE "series"`);
  }
}
