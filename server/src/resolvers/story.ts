import { Story } from "../entities/Story.entity";
import { MyContext } from "src/types";
import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";

//TODO Update resolvers

@Resolver()
export class StoryResolver {
  @Query(() => [Story])
  stories(@Ctx() ctx: MyContext): Promise<Story[]> {
    return ctx.em.find(Story, {});
  }

  @Query(() => Story, { nullable: true })
  story(
    @Arg("id", () => String) id: number,
    @Ctx() ctx: MyContext
  ): Promise<Story | null> {
    return ctx.em.findOne(Story, { id });
  }

  @Mutation(() => Story)
  async createStory(
    @Arg("title", () => String) title: String,
    @Ctx() ctx: MyContext
  ): Promise<Story> {
    const newStory = ctx.em.create(Story, { title });
    await ctx.em.persistAndFlush(newStory);
    return newStory;
  }

  @Mutation(() => Story, { nullable: true })
  async updateStory(
    @Arg("id", () => String) id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() ctx: MyContext
  ): Promise<Story | null> {
    const updatedStory = await ctx.em.findOne(Story, { id });
    if (!updatedStory) {
      return null;
    }

    if (typeof title !== "undefined") {
      updatedStory.title = title;
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
