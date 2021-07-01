import React from "react";
import { CategoryTypesOptions } from "../../Admin/Containers/CreateStoryPage/helpers";
import { Stack } from "../../Components/Stack/Stack";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import dundeeAd from "../HomePage/TopStoryCard/dundeeAd.png";
import readMoreBulletPoints from "../NeighborhoodManagementPage/images/readMoreBulletPoints.png";
import bulletPoint from "../NeighborhoodManagementPage/images/bulletPoint.png";

import styles from "./TopicManagementPage.module.scss";
import { Link } from "react-router-dom";

const TopicManagementPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <Stack direction="vertical">
          <p>Select a topic</p>
          <div className={styles.underlines} />
        </Stack>
        <div className={styles.mainContent}>
          <Stack
            direction="vertical"
            justify="space-between"
            className={styles.categoryListWrapper}
          >
            {CategoryTypesOptions.map((category) => (
              <Link
                key={category.value}
                to={`/topic/${category.value}`}
                className={styles.categoryWrapper}
              >
                <Stack align="center">
                  <img
                    className={styles.bulletPoint}
                    src={bulletPoint}
                    alt="bullet point"
                  />

                  <Stack align="center" className={styles.category}>
                    <h1>{category.label}</h1>
                    <img
                      className={styles.readMore}
                      src={readMoreBulletPoints}
                      alt="three bullet points"
                    />
                    <div className={styles.colorShadow} />
                  </Stack>
                </Stack>
              </Link>
            ))}
          </Stack>

          <button className={styles.dundeeAdWrapper}>
            <img
              className={styles.ad}
              src={dundeeAd}
              alt="dundee ad to subscribe"
            />
          </button>
        </div>
      </div>
      <HomePageFooter />
    </div>
  );
};

export default TopicManagementPage;
