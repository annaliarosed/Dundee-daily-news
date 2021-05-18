import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../generated/graphql";
import Header from "./Header";
import styles from "./HomePage.module.scss";
import StoryCard from "./StoryCard";

const HomePage = () => {
  const { data } = useGetStoriesQuery();
  console.log(data, "ddata");

  return (
    <div className={styles.body}>
      <Header />
      <Stack gap={3} direction="vertical" align="center">
        {data?.stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Stack>
    </div>
  );
};

export default HomePage;
