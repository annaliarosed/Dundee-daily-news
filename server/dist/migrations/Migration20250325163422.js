"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250325163422 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250325163422 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `username` text not null, `password` text not null) default character set utf8mb4 engine = InnoDB;');
            this.addSql('create table `story` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `head` text not null, `sub_head` text not null, `caption` text not null, `story_text` text not null, `category` text not null, `author` text not null, `town` text not null, `alt_text` text not null, `img_urls` text null) default character set utf8mb4 engine = InnoDB;');
        });
    }
}
exports.Migration20250325163422 = Migration20250325163422;
//# sourceMappingURL=Migration20250325163422.js.map