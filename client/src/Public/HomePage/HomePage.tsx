import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../Admin/generated/graphql";
import Header from "./Header";
import { sort } from "ramda";
import styles from "./HomePage.module.scss";
import {
  CategoryTypesMapping,
  StoryType,
} from "../../Admin/Containers/CreateStoryPage/helpers";
import { CircularProgress, Snackbar } from "@material-ui/core";
import TopStoryCard from "./TopStoryCard";

const HomePage = () => {
  const { data, error, loading } = useGetStoriesQuery();

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  const { stories } = data;

  console.log(data, "ddata");

  const sortChronologically = (a: StoryType, b: StoryType): number => {
    return (
      new Date(Number(b.createdAt)).getTime() -
      new Date(Number(a.createdAt)).getTime()
    );
  };

  const sortedStories = sort(sortChronologically, stories);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <TopStoryCard story={sortedStories[0]} />
          <Stack gap={3} direction="vertical" align="center">
            {sortedStories.map((story) => (
              <div></div>
            ))}
          </Stack>
        </div>
      </div>
    </>
  );
};

export default HomePage;
