import "dotenv/config";
import { __prod__ } from "./constants";
import { Story } from "./entities/Story.entity";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User.entity";
console.log(process.env.MIKRO_ORM_USER, "process.env.MIKRO_ORM_USER");

export default {
  migrations: {
    //TODO try the change to __dirname
    path: path.join(
      "/Users/annaliadestefano/personal/dundee-daily-news/server/src",
      "./migrations"
    ),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  clientUrl: process.env.DATABASE_DEFAULT_URL,
  entities: [Story, User],
  password: "serenity12",
  //dbName: "dundwbzn_DUNDEEDAILYDB",
  dbName: "DUNDEEDAILYDB",
  type: "mysql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
