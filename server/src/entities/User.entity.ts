import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { text } from "express";
import { ObjectType, Field } from "type-graphql";
//TODO update fields add more
@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: text })
  username!: string;

  @Property({ type: text })
  password!: string;
}
