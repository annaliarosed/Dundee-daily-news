import { __prod__ } from "./constants";
import { Story } from "./entities/Story.entity";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User.entity";

export default {
  migrations: {
    //TODO try the change to __dirname
    path: path.join(
      "/Users/annaliadestefano/personal/dundee-daily-news/server/src",
      "./migrations"
    ),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Story, User],
  password: "serenity12",
  dbName: "DUNDEEDAILYDB",
  type: "mysql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
