import React from "react";
import { Stack } from "../../Components/Stack/Stack";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import dundeeAd from "../HomePage/TopStoryCard/dundeeAd.png";

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.body}>
        <Stack direction="vertical">
          <Stack justify="center">
            <h1>Meet the Newsroom</h1>
          </Stack>
          <div className={styles.underlines} />
        </Stack>

        <div className={styles.introWrapper}>
          <Stack direction="vertical">
            <h2 className={styles.introHeader}>
              The first local news company in Dundee since 1917
            </h2>
            <p className={styles.introText}>
              Our newspaper is anchored in East Dundee. We are residents who
              care about making local news available to our community. We have
              past news reporting experience and saw a void in coverage for the
              area—especially in the past year. We share the frustration with
              the current state of the news reading experience—cluttered with
              interrupting ads, videos and paywalls that make reading a painfull
              experience.
            </p>
          </Stack>

          <div className={styles.dundeeAdWrapper}>
            <div className={styles.dundeeAd}>
              <img
                className={styles.ad}
                src={dundeeAd}
                alt="dundee ad to subscribe"
              />
            </div>
          </div>
        </div>

        <Stack gap={5} className={styles.biosWrapper}>
          <div>
            <h3 className={styles.roleTitle}>Reporter</h3>
            <h4 className={styles.name}>
              Erin <br /> Sauder
            </h4>
            <p>
              Erin has been covering news as a freelance journalist in our
              neighborhood for the past 10 years. Her work has been featured in
              both the Chicago Tribune’s Courier-News and Shaw Media
              publications. Prior to freelancing full-time, she worked for
              several years covering other area suburbs for Suburban Life Media.
            </p>
          </div>
          <div className={styles.line} />
          <div>
            <h3 className={styles.roleTitle}>Editor and Designer</h3>
            <h4 className={styles.name}>
              Andy <br /> Sauder
            </h4>
            <p>
              Andy is currently a designer for an East Dundee business, Zeller
              Marketing & Design. His newspaper experience started when he took
              over his brother’s paper route at age 10, delivering the Peoria
              Journal Star. While in college for graphic design, he worked in
              the news room creating ads, cutting and pasting news layouts with
              wax rollers, and color correcting photos before publishing.
            </p>
          </div>
          <div className={styles.line} />
          <div>
            <h3 className={styles.roleTitle}>Web developer</h3>
            <h4 className={styles.name}>
              Annalia <br /> DeStefano
            </h4>
            <p>
              Andy is currently a designer for an East Dundee business, Zeller
              Marketing & Design. His newspaper experience started when he took
              over his brother’s paper route at age 10, delivering the Peoria
              Journal Star. While in college for graphic design, he worked in
              the news room creating ads, cutting and pasting news layouts with
              wax rollers, and color correcting photos before publishing.
            </p>
          </div>
        </Stack>
      </div>

      <HomePageFooter />
    </div>
  );
};

export default AboutPage;
