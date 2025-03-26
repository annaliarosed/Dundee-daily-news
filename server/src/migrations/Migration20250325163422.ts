import { Migration } from '@mikro-orm/migrations';

export class Migration20250325163422 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `username` text not null, `password` text not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `story` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `head` text not null, `sub_head` text not null, `caption` text not null, `story_text` text not null, `category` text not null, `author` text not null, `town` text not null, `alt_text` text not null, `img_urls` text null) default character set utf8mb4 engine = InnoDB;');
  }

}
