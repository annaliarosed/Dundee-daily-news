import React, { useState } from "react";
import { Stack } from "../../Components/Stack/Stack";
import Header from "./Header";
import { Story } from "./helpers";
import styles from "./HomePage.module.scss";
import StoryCard from "./StoryCard";

const HomePage = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: "123",
      title: "1st story",
      imgUrl: "https://picsum.photos/200/500",
      paragraph: "this is the 1st story",
    },
    {
      id: "123",
      title: "2nd story",
      imgUrl: "https://picsum.photos/200/400",
      paragraph: "this is the 2nd story",
    },
  ]);

  return (
    <div className={styles.body}>
      <Header />
      <Stack gap={3} direction="vertical" align="center">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Stack>
    </div>
  );
};

export default HomePage;
