import { CategoryType, TownType } from "../../../constants";
import { Story } from "../../../generated/graphql";

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
    | "caption"
    | "storyText"
    | "category"
    | "author"
    | "town"
    | "altText"
    | "imgUrls"
  >;

export const TownTypesMapping: Record<TownType, string> = {
  algonquin: "Algonquin",
  carpentersville: "Carpentersville",
  east_dundee: "East Dundee",
  sleepy_hollow: "Sleepy Hollow",
  west_dundee: "West Dundee",
  //local: "Local",
};

export const TownTypesOptions = [
  ...Object.keys(TownTypesMapping).map((value) => ({
    value,
    label: TownTypesMapping[value as TownType],
  })),
];

export const CategoryTypesMapping: Record<string, string> = {
  business: "Business",
  crime: "Crime",
  editorial: "Editorial",
  entertainment: "Entertainment",
  history: "History",
  undefined: "Miscellaneous",
  news: "News",
  opinion: "Opinion",
  school: "School",
  voting: "Voting",
  village_hall: "Village hall",
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
  caption: string;
  storyText: string;
  author: string;
  category: CategoryType | string;
  town: TownType | string;
  altText: string;
  imgUrls: string[];
}

export const defaultValuesCreateForm = {
  head: "",
  subHead: "",
  caption: "",
  storyText: "",
  author: "",
  category: "",
  town: "",
  altText: "",
  imgUrls: [""],
};
