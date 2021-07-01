import { CircularProgress, Snackbar } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { sort } from "ramda";
import { CategoryType } from "../../../constants";
import { sortChronologically } from "../../../utils/sortChronologically";
import { useGetStoriesQuery } from "../../../generated/graphql";
import styles from "./TopicPage.module.scss";
import Header from "../../HomePage/Header";
import { Stack } from "../../../Components/Stack/Stack";
import { CategoryTypesMapping } from "../../../Admin/Containers/CreateStoryPage/helpers";
import TopStoryCard from "../../HomePage/TopStoryCard";
import cn from "classnames";
import StoryCard from "../../HomePage/StoryCard";
import HomePageFooter from "../../HomePage/HomePageFooter";

const TopicPage = () => {
  const { category } = useParams<{ category: CategoryType }>();
  const { data, error, loading } = useGetStoriesQuery({
    variables: {
      categoryFilter: {
        category: category,
      },
    },
  });

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  const { stories } = data;
  const sortedStories = sort(sortChronologically, stories);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <Stack direction="vertical">
          <Stack align="center" className={styles.categoryHeaderWrapper}>
            <Link tabIndex={-1} to="/topic">
              <button className={styles.backButton}>{`< Topic`}</button>
            </Link>
            <h1 className={styles.categoryHeader}>
              {CategoryTypesMapping[category]}
            </h1>
          </Stack>
          <div className={styles.underlines} />
        </Stack>
        {stories.length === 0 ? (
          <div className={styles.emptyState}>
            No stories yet in this category, come back later to check for more!
          </div>
        ) : (
          <div className={styles.storiesWrapper}>
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
        )}
      </div>
      <HomePageFooter />
    </div>
  );
};

export default TopicPage;
