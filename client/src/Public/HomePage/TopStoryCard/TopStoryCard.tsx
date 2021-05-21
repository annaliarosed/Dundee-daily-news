import React from "react";
import { StoryType } from "../../../Admin/Containers/CreateStoryPage/helpers";
import moment from "moment";
import styles from "./TopStoryCard.module.scss";
import Button from "../../../Components/Button";
import cn from "classnames";
import TownLozenge from "../../../Components/TownLozenge";

interface TopStoryCardProps {
  story: StoryType;
}

const TopStoryCard: React.FC<TopStoryCardProps> = ({ story }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoWrapper}>
        <div
          className={styles.photo}
          style={{
            backgroundImage: `url(${story.imgUrls[0] && story.imgUrls[0]})`,
          }}
        />
        <div className={cn(styles.photoBackground, styles[story.town])} />
      </div>
      <h2>{story.head}</h2>
      <p className={styles.date}>
        {moment(Number(story.createdAt)).format("MMMM D, YYYY")}
      </p>
      <TownLozenge town={story.town} />
      <div className={styles.text}>
        <p>{story.subHead}</p>
        <p>{`${story.storyText.split(" ").slice(0, 40).join(" ")}...`}</p>
      </div>
      <Button>More</Button>
    </div>
  );
};

export default TopStoryCard;
