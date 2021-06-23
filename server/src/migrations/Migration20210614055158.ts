import { Migration } from '@mikro-orm/migrations';

export class Migration20210614055158 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists `undefined`;');
  }

}
