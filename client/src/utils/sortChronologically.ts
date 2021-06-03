import { StoryType } from "../Admin/Containers/CreateStoryPage/helpers";

export const sortChronologically = (a: StoryType, b: StoryType): number => {
  return (
    new Date(Number(b.createdAt)).getTime() -
    new Date(Number(a.createdAt)).getTime()
  );
};
