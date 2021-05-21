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
import StoryCard from "./StoryCard";
import HomePageFooter from "./HomePageFooter";

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
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.wrapper}>
        <TopStoryCard story={sortedStories[0]} />
        <Stack className={styles.storiesWrapper} gap={3} direction="vertical">
          {sortedStories.slice(1, 7).map((story) => (
            <>
              <StoryCard key={story.id} story={story} />
              <div className={styles.bottomBorder} />
            </>
          ))}
        </Stack>
      </div>
      <HomePageFooter />
    </div>
  );
};

export default HomePage;
