import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../Admin/generated/graphql";
import Header from "./Header";
import { sort } from "ramda";
import styles from "./HomePage.module.scss";
import { StoryType } from "../../Admin/Containers/CreateStoryPage/helpers";
import { CircularProgress, Snackbar } from "@material-ui/core";
import TopStoryCard from "./TopStoryCard";
import StoryCard from "./StoryCard";
import HomePageFooter from "./HomePageFooter";
import { Link } from "react-router-dom";

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

        <Stack direction="vertical">
          {sortedStories.slice(1, 7).map((story, index) => (
            <Link key={story.id} to={`/story/${story.id}`}>
              <StoryCard story={story} />
              <div
                className={cn(styles.bottomBorder, {
                  [styles.last]: index === 5,
                })}
              />
            </Link>
          ))}
        </Stack>
      </div>

      <HomePageFooter />
    </div>
  );
};

export default HomePage;
