import React from "react";
import { StoryType } from "../../../Admin/Containers/CreateStoryPage/helpers";
import moment from "moment";
import styles from "./TopStoryCard.module.scss";
import cn from "classnames";
import TownLozenge from "../../../Components/TownLozenge";
import { Link } from "react-router-dom";
import dundeeAd from "./dundeeAd.png";
import Button from "../../../Components/Button";

interface TopStoryCardProps {
  story: StoryType;
}

const TopStoryCard: React.FC<TopStoryCardProps> = ({ story }) => {
  if (!story) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Link to={`/story/${story.id}`}>
        <div className={styles.photoWrapper}>
          <div
            className={styles.photo}
            title={story.altText}
            style={{
              backgroundImage: `url(${
                story.imgUrls[0] ? story.imgUrls[0] : ""
              })`,
            }}
          />
          <div className={cn(styles.photoBackground, styles[story.town])} />
        </div>
      </Link>
      <h2>{story.head}</h2>
      <p className={styles.date}>
        {moment(Number(story.createdAt)).format("MMMM D, YYYY")}
      </p>
      <TownLozenge town={story.town} />
      <div className={styles.text}>
        <p>{story.subHead}</p>
        <p>{` ${
          story.caption
            ? story.caption
            : story.storyText.split(" ").slice(0, 40).join(" ")
        }...`}</p>
      </div>
      <Button>More</Button>
      <div className={styles.adWrapper}>
        <img
          className={styles.ad}
          src={dundeeAd}
          alt="Dundee ad to subscribe"
        />
      </div>
    </div>
  );
};

export default TopStoryCard;
