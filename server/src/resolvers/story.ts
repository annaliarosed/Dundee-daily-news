import { Story } from "../entities/Story.entity";
import { MyContext } from "src/types";
import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Mutation,
  InputType,
  Field,
} from "type-graphql";

//TODO Update resolvers
@InputType()
class CreateStoryInput {
  @Field()
  head!: string;
  @Field({ nullable: true })
  subHead!: string;
  @Field()
  storyText!: string;
  @Field({ nullable: true })
  category!: string;
  @Field()
  author!: string;
  @Field()
  town!: string;
  @Field(() => [String])
  imgUrls!: string[];
}

@Resolver()
export class StoryResolver {
  @Query(() => [Story])
  stories(@Ctx() ctx: MyContext): Promise<Story[]> {
    return ctx.em.find(Story, {});
  }

  @Query(() => Story, { nullable: true })
  story(
    @Arg("id", () => Number) id: number,
    @Ctx() ctx: MyContext
  ): Promise<Story | null> {
    return ctx.em.findOne(Story, { id });
  }

  @Mutation(() => Story)
  async createStory(
    @Arg("input", () => CreateStoryInput) input: CreateStoryInput,
    @Ctx() ctx: MyContext
  ): Promise<Story> {
    const newStory = ctx.em.create(Story, {
      ...input,
    });

    await ctx.em.persistAndFlush(newStory);

    return newStory;
  }

  @Mutation(() => Story, { nullable: true })
  async updateStory(
    @Arg("id", () => String) id: number,
    @Arg("head", () => String, { nullable: true }) head: string,
    @Ctx() ctx: MyContext
  ): Promise<Story | null> {
    const updatedStory = await ctx.em.findOne(Story, { id });
    if (!updatedStory) {
      return null;
    }

    if (typeof head !== "undefined") {
      updatedStory.head = head;
      await ctx.em.persistAndFlush(updatedStory);
    }

    return updatedStory;
  }

  @Mutation(() => Boolean)
  async deleteStory(
    @Arg("id", () => String) id: number,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    try {
      await ctx.em.nativeDelete(Story, { id });
    } catch (err) {
      return false;
    }
    return true;
  }
}
