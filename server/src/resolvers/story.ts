import { Story } from "../entities/Story.entity";
import { MyContext } from "src/types";
import { Resolver, Query, Ctx } from "type-graphql";

@Resolver()
export class StoryResolver {
  @Query(() => [Story])
  stories(@Ctx() ctx: MyContext): Promise<Story[]> {
    return ctx.em.find(Story, {});
  }
}
