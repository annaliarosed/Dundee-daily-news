import { CategoryType, TownType } from "../../../constants";

export interface EditStoryFormValues {
  head: string;
  subHead: string;
  caption: string;
  storyText: string;
  author: string;
  category: CategoryType | string;
  town: TownType | string;
  altText: string;
  imgUrls: string[];
}

// TODO category and toown shouldnt have | stringg
