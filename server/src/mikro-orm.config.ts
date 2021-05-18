import { __prod__ } from "./constants";
import { Story } from "./entities/Story.entity";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    //TODO try the change to __dirname
    path: path.join(
      "/Users/annaliadestefano/personal/dundee-daily-news",
      "./migrations"
    ),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Story],
  password: "serenity12",
  dbName: "DUNDEEDAILYDB",
  type: "mysql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
