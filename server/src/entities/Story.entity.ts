import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";
//TODO update fields add more
@Entity()
@ObjectType()
export class Story {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  title!: string;

  @Field(() => String)
  @Property({ type: "text" })
  storyText!: string;

  @Field(() => String)
  @Property({ type: "text" })
  category: string;

  @Field(() => String)
  @Property({ type: "text" })
  author!: string;
}

// create: migration everytime the file is edited
