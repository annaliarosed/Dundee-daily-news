import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { StoryResolver } from "./resolvers/story";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [StoryResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  server.applyMiddleware({ app });

  app.listen(4000, () => console.log("server ready at localhost:4000"));
};

main().catch((err) => console.error(err));
