import "dotenv/config";
import { __prod__ } from "./constants";
import { Story } from "./entities/Story.entity";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User.entity";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  //clientUrl: process.env.DATABASE_URL,
  entities: [Story, User],
  password: "@Serenity1122004",
  //dbName: "dundwbzn_DUNDEEDAILYDB",
  dbName: "DUNDEEDAILYDB",
  //port: 443,
  type: "mysql",

  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
