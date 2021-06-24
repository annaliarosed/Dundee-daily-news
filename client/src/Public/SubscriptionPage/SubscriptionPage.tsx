import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Header from "../HomePage/Header";
import HomePageFooter from "../HomePage/HomePageFooter";
import styles from "./SubscriptionPage.module.scss";
import { Stack } from "../../Components/Stack/Stack";

const SubscriptionPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Stack
        direction="vertical"
        gap={5}
        align="center"
        className={styles.body}
      >
        <div>
          This page is a work in progress, if you want to subscribe and support
          Dundee Daily News, send us an email and we would be happy to help!
        </div>

        <Link to="/contact">
          <Button>Send us an email!</Button>
        </Link>
      </Stack>

      <HomePageFooter />
    </div>
  );
};

export default SubscriptionPage;
