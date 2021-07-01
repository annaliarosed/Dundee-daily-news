import React from "react";
import { Link } from "react-router-dom";
import dundeeAd from "../HomePage/TopStoryCard/dundeeAd.png";

import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import styles from "./SubscriptionPage.module.scss";
import { Stack } from "../../Components/Stack/Stack";

const SubscriptionPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Stack direction="vertical">
        <Stack align="center" justify="center">
          <h1>Subscribe</h1>
        </Stack>
        <div className={styles.underlines} />
      </Stack>

      <div className={styles.body}>
        <div>
          <Stack className={styles.headerWrapper}>
            <h1 className={styles.header}>Check back soon...</h1>
          </Stack>
          <p className={styles.bodyText}>
            We are currently working on a subscription model that allows easy
            access to content without intrusive ads that get in the way of the
            story. Questions about advertising?
            <Link to="/contact">
              <span className={styles.email}>Email us</span>
            </Link>
          </p>
        </div>

        <Link tabIndex={-1} to="/subscribe">
          <button tabIndex={0} className={styles.dundeeAdWrapper}>
            <img
              className={styles.ad}
              src={dundeeAd}
              alt="dundee ad to subscribe"
            />
          </button>
        </Link>
      </div>

      <HomePageFooter />
    </div>
  );
};

export default SubscriptionPage;

/* <Link to="/contact">
<Button>Send us an email!</Button>
</Link> */

// grid-template-columns: 1fr min-content;
