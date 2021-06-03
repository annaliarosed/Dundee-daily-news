import React from "react";
import { CategoryTypesOptions } from "../../Admin/Containers/CreateStoryPage/helpers";
import { Stack } from "../../Components/Stack/Stack";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import dundeeAd from "../HomePage/TopStoryCard/dundeeAd.png";
import readMoreBulletPoints from "../NeighborhoodManagementPage/images/readMoreBulletPoints.png";
import bulletPoint from "../NeighborhoodManagementPage/images/bulletPoint.png";

import styles from "./TopicManagementPage.module.scss";

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
              <Stack
                align="center"
                className={styles.categoryWrapper}
                tabIndex={0}
              >
                <img
                  className={styles.bulletPoint}
                  src={bulletPoint}
                  alt="bullet point"
                />

                <Stack gap={3} align="center" className={styles.category}>
                  <h1>{category.label}</h1>
                  <img
                    className={styles.readMore}
                    src={readMoreBulletPoints}
                    alt="three bullet points"
                  />
                  <div className={styles.colorShadow} />
                </Stack>
              </Stack>
            ))}
          </Stack>

          <div className={styles.dundeeAdWrapper}>
            <img className={styles.ad} src={dundeeAd} alt="dundee ad" />
          </div>
        </div>
      </div>
      <HomePageFooter />
    </div>
  );
};

export default TopicManagementPage;
