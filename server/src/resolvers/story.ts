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

@InputType()
class UpdateStoryInput {
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

@InputType()
class FilterQueryByTown {
  @Field({ nullable: true })
  town: string;
}

@InputType()
class FilterQueryByCategory {
  @Field({ nullable: true })
  category: string;
}

@Resolver()
export class StoryResolver {
  @Query(() => [Story])
  stories(
    @Arg("townFilter", () => FilterQueryByTown, { nullable: true })
    townFilter: FilterQueryByTown,
    @Arg("categoryFilter", () => FilterQueryByCategory, { nullable: true })
    categoryFilter: FilterQueryByCategory,
    @Ctx() ctx: MyContext
  ): Promise<Story[]> {
    if (townFilter) {
      return ctx.em.find(Story, { ...townFilter });
    }

    if (categoryFilter) {
      return ctx.em.find(Story, { ...categoryFilter });
    }

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

  @Mutation(() => Story)
  async updateStory(
    @Arg("id", () => Number) id: number,
    @Arg("input", () => UpdateStoryInput) input: UpdateStoryInput,
    @Ctx() ctx: MyContext
  ): Promise<Story> {
    const updatedStory = await ctx.em.findOne(Story, { id });
    if (!updatedStory) {
      throw new Error("Story not found!");
    }

    Object.assign(updatedStory, input);
    await ctx.em.persistAndFlush(updatedStory);

    return updatedStory;
  }

  @Mutation(() => Boolean)
  async deleteStory(
    @Arg("id", () => Number) id: number,
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
