import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../Admin/generated/graphql";
import Header from "./Header";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { data } = useGetStoriesQuery();
  console.log(data, "ddata");

  return (
    <div className={styles.body}>
      <h1 style={{ fontFamily: "Newsreader" }}>test</h1>
      <p style={{ fontFamily: "Newsreader" }}>test</p>
      <Header />
      <Stack gap={3} direction="vertical" align="center">
        {data?.stories.map((story) => (
          <div>hi</div>
        ))}
      </Stack>
    </div>
  );
};

export default HomePage;
