import { CategoryType, TownType } from "../../constants";
import { Story } from "../../generated/graphql";

export type StoryType = {
  __typename?: "Story" | undefined;
} & {
  __typename?: "Story" | undefined;
} & Pick<
    Story,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "head"
    | "subHead"
    | "storyText"
    | "category"
    | "author"
    | "town"
    | "imgUrls"
  >;

export const TownTypesMapping: Record<TownType, string> = {
  east_dundee: "East Dundee",
  west_dundee: "West Dundee",
  carpentersville: "Carpentersville",
  sleepy_hollow: "Sleepy Hollow",
  algonquin: "Algonquin",
  undefined: "No town",
};

export const TownTypesOptions = [
  ...Object.keys(TownTypesMapping).map((value) => ({
    value,
    label: TownTypesMapping[value as TownType],
  })),
];

export const CategoryTypesMapping: Record<string, string> = {
  news: "News",
  crime: "Crime",
  voting: "Voting",
  business: "Business",
  village_hall: "Village hall",
  history: "History",
  opinion: "Opinion",
  editorial: "Editorial",
  entertainment: "Entertainment",
  school: "School",
  undefined: "No category",
};

export const CategoryTypesOptions = [
  ...Object.keys(CategoryTypesMapping).map((value) => ({
    value,
    label: CategoryTypesMapping[value as CategoryType],
  })),
];

// TODO change/ fix CategoryType | string
export interface CreateStoryFormValues {
  head: string;
  subHead: string;
  storyText: string;
  author: string;
  category: CategoryType | string;
  town: TownType | string;
  imgUrls: string[];
}

export const defaultValuesCreateForm = {
  head: "",
  subHead: "",
  storyText: "",
  author: "",
  category: "",
  town: "",
  imgUrls: [""],
};
