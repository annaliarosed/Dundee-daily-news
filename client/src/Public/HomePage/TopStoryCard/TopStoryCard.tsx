import React from "react";
import { StoryType } from "../../../Admin/Containers/CreateStoryPage/helpers";
import moment from "moment";
import styles from "./TopStoryCard.module.scss";

interface TopStoryCardProps {
  story: StoryType;
}

const TopStoryCard: React.FC<TopStoryCardProps> = ({ story }) => {
  return (
    <div style={{ width: "400px" }}>
      <img
        className={styles.photo}
        src={story.imgUrls[0] ? story.imgUrls[0] : "https://picsum.photos/200"}
        alt="top story"
      />
      <h2>{story.head}</h2>

      <p className={styles.date}>
        {moment(Number(story.createdAt)).format("MMMM D, YYYY")}
      </p>
      <p>{story.town}</p>
      <p>{story.subHead}</p>
      <p>{`${story.storyText.split(" ").slice(0, 40).join(" ")}...`}</p>
    </div>
  );
};

export default TopStoryCard;
