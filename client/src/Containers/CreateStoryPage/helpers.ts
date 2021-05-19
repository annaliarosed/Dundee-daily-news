import { CategoryType, TownType } from "../../constants";
import { Story } from "../../generated/graphql";

export type Stories = Array<
  { __typename?: "Story" } & Pick<
    Story,
    | "id"
    | "head"
    | "subHead"
    | "createdAt"
    | "updatedAt"
    | "storyText"
    | "category"
    | "author"
    | "town"
    | "imgUrls"
  >
>;

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

export const TownTypesOptions = [
  { value: "east_dundee", label: "East Dundee" },
  { value: "west_dundee", label: "West Dundee" },
  { value: "carpentersville", label: "Carpentersville" },
  { value: "sleepy_hollow", label: "Sleepy Hollow" },
  { value: "algonquin", label: "Algonquin" },
  { value: "undefined", label: "No town" },
];

export const CategoryTypesOptions = [
  { value: "news", label: "News" },
  { value: "crime", label: "Crime" },
  { value: "voting", label: "Voting" },
  { value: "business", label: "Business" },
  { value: "village_hall", label: "Village hall" },
  { value: "history", label: "History" },
  { value: "opinion", label: "Opinion" },
  { value: "editorial", label: "Editorial" },
  { value: "entertainment", label: "Entertainment" },
  { value: "school", label: "School" },
  { value: "undefined", label: "No category" },
];

export interface CreateStoryFormValues {
  head: string;
  subHead: string;
  storyText: string;
  author: string;
  category: CategoryType;
  town: TownType;
  imgUrls: string[];
}

export const defaultValuesCreateForm = {
  head: "",
  subHead: "",
  storyText: "",
  author: "",
  category: undefined,
  town: undefined,
  imgUrls: [""],
};
