import "dotenv/config";
import { __prod__ } from "./constants";
import { Story } from "./entities/Story.entity";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User.entity";

export default {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  debug: !__prod__,
  entities: [Story, User],
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
