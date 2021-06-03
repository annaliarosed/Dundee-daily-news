import { StoryType } from "../../Admin/Containers/CreateStoryPage/helpers";

export interface Story {
  id: string;
  title: string;
  imgUrl: string | null;
  paragraph: string;
}

export const navOptions = [
  { value: "/", label: "Home" },
  { value: "neighborhood", label: "Neighborhood" },
  { value: "about", label: "About us" },
  { value: "subscribe", label: "Subscribe" },
  { value: "contact", label: "Contact" },
];

export const sortChronologically = (a: StoryType, b: StoryType): number => {
  return (
    new Date(Number(b.createdAt)).getTime() -
    new Date(Number(a.createdAt)).getTime()
  );
};
