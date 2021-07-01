import { CircularProgress, Snackbar } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { TownTypesMapping } from "../../../Admin/Containers/CreateStoryPage/helpers";
import { Stack } from "../../../Components/Stack/Stack";
import { TownType } from "../../../constants";
import { useGetStoriesQuery } from "../../../generated/graphql";
import Header from "../../HomePage/Header";
import HomePageFooter from "../../HomePage/HomePageFooter";
import TopStoryCard from "../../HomePage/TopStoryCard";
import { sortChronologically } from "../../../utils/sortChronologically";
import { sort } from "ramda";
import cn from "classnames";
import styles from "./NeighborhoodPage.module.scss";
import StoryCard from "../../HomePage/StoryCard";

const NeighborhoodPage = () => {
  const { town } = useParams<{ town: TownType }>();
  const { data, error, loading } = useGetStoriesQuery({
    variables: {
      townFilter: {
        town: town,
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
          <Stack align="center" className={styles.townHeaderWrapper}>
            <Link tabIndex={-1} to="/neighborhood">
              <button className={styles.backButton}>{`< Neighborhood`}</button>
            </Link>
            <h1 className={styles.townHeader}>{TownTypesMapping[town]}</h1>
          </Stack>
          <div className={styles.underlines} />
        </Stack>

        <div className={styles.storiesWrapper}>
          <TopStoryCard story={sortedStories[0]} />
          <Stack direction="vertical">
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
      </div>
      <HomePageFooter />
    </div>
  );
};

export default NeighborhoodPage;
