import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../generated/graphql";
import Header from "./Header";
import { sort } from "ramda";
import styles from "./HomePage.module.scss";
import { CircularProgress, Snackbar } from "@material-ui/core";
import TopStoryCard from "./TopStoryCard";
import { sortChronologically } from "../../utils/sortChronologically";
import StoryCard from "./StoryCard";
import HomePageFooter from "./HomePageFooter";

import cn from "classnames";

const HomePage = () => {
  const { data, error, loading } = useGetStoriesQuery();

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  const { stories } = data;

  const sortedStories = sort(sortChronologically, stories);

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.wrapper}>
        <TopStoryCard story={sortedStories[0]} />

        <Stack direction="vertical" className={styles.storyCards}>
          {sortedStories.slice(1, 7).map((story, index) => (
            <>
              <StoryCard story={story} />
              <div
                className={cn(styles.bottomBorder, {
                  [styles.last]: index === 5,
                })}
              />
            </>
          ))}
        </Stack>
      </div>

      <HomePageFooter />
    </div>
  );
};

export default HomePage;
