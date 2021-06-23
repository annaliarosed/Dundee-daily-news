import "reflect-metadata";
import "dotenv/config";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { StoryResolver } from "./resolvers/story";
import { UserResolver } from "./resolvers/user";
//import Redis from "ioredis";
import session from "express-session";
//import connectRedis from "connect-redis";
import { __prod__ } from "./constants";
import cors from "cors";

console.log("PORT", process.env.DATABASE_URL);
const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  // const RedisStore = connectRedis(session);
  // const redis = new Redis(process.env.REDIS_URL);
  app.set("proxy", 1);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: "sauderkraut",
      // store: new RedisStore({
      //   client: redis,
      //   disableTouch: true,
      // }),

      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years,
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? ".dundeedaily.news" : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [StoryResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res }),
  });

  server.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(process.env.PORT, () =>
    console.log("server ready at localhost:4000")
  );
};

main().catch((err) => console.error("err: ", err));
