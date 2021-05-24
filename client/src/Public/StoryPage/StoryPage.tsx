import { CircularProgress, Snackbar } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetStoryQuery } from "../../Admin/generated/graphql";
import { Stack } from "../../Components/Stack/Stack";
import TownLozenge from "../../Components/TownLozenge";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import styles from "./StoryPage.module.scss";

interface StoryPageProps {}

const StoryPage: React.FC<StoryPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetStoryQuery({
    variables: {
      id: Number(id),
    },
  });

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  const { story } = data;

  if (!story) {
    return null;
  }
  console.log(story);

  const regEx = /↵↵/i;
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.topBody}>
          <Stack
            direction="vertical"
            align="flex-start"
            justify="center"
            className={styles.header}
          >
            <TownLozenge town={story.town} />
            <h1>{story.head}</h1>
            <div className={styles.textWrapper}>
              {moment(Number(story.createdAt)).format("MMMM Do YYYY // h:mm a")}
              <p>{`Reported by ${story.author}`}</p>
            </div>
          </Stack>
          <div className={styles.headerLeft}>
            <div className={styles.photoWrapper}>
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url(${
                    story.imgUrls[0] && story.imgUrls[0]
                  })`,
                }}
              />
              {/* TODO add caption here when its in db */}
            </div>
          </div>
        </div>

        <section className={styles.articleWrapper}>
          {story.storyText.split("\n").map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
        </section>

        <HomePageFooter />
      </div>
    </>
  );
};

export default StoryPage;
