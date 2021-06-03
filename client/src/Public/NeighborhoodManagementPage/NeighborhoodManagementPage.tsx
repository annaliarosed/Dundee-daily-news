import React from "react";
import { TownTypesOptions } from "../../Admin/Containers/CreateStoryPage/helpers";
import { Stack } from "../../Components/Stack/Stack";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import cn from "classnames";
import dundeeAd from "../HomePage/TopStoryCard/dundeeAd.png";
import readMoreBulletPoints from "./images/readMoreBulletPoints.png";
import bulletPoint from "./images/bulletPoint.png";
import styles from "./NeighborhoodManagementPage.module.scss";

const NeighborhoodManagementPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <Stack direction="vertical">
          <p>Select a neighborhood</p>
          <div className={styles.underlines} />
        </Stack>

        <div className={styles.mainContent}>
          <Stack
            direction="vertical"
            justify="space-between"
            className={styles.townListWrapper}
          >
            {TownTypesOptions.map((town) => (
              <Stack align="center" className={styles.townWrapper} tabIndex={0}>
                <img
                  className={styles.bulletPoint}
                  src={bulletPoint}
                  alt="bullet point"
                />

                <Stack gap={3} align="center" className={styles.town}>
                  <h1>{town.label}</h1>
                  <img
                    className={styles.readMore}
                    src={readMoreBulletPoints}
                    alt="three bullet points"
                  />
                  <div className={cn(styles.colorShadow, styles[town.value])} />
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

export default NeighborhoodManagementPage;
