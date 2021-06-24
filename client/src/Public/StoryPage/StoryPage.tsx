import { CircularProgress, Snackbar } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetStoryQuery } from "../../generated/graphql";
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

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <div className={styles.headerWrapper}>
          <Stack direction="vertical" align="flex-start">
            <TownLozenge town={story.town} />
            <h1>{story.head}</h1>
            <div className={styles.photoWrapper}>
              <div
                title={story.altText}
                className={styles.photo}
                style={{
                  backgroundImage: `url(${
                    story.imgUrls[0] && story.imgUrls[0]
                  })`,
                }}
              />
            </div>
            <p>{story.caption}</p>
          </Stack>
        </div>

        <section className={styles.articleWrapper}>
          <Stack gap={1}>
            <p className={styles.author}>{story.author} </p>
            <p className={styles.date}>
              {`// ${moment(Number(story.createdAt)).format("MMMM D, YYYY ")}`}
            </p>
          </Stack>
          {story.storyText.split("\n").map((item, idx) => {
            return (
              <p key={idx} className={styles.storyText}>
                {item}
              </p>
            );
          })}
        </section>

        <HomePageFooter />
      </div>
    </div>
  );
};

export default StoryPage;
