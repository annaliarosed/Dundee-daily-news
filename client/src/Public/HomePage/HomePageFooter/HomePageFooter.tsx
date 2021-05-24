import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import dLogo from "./images/dLogo.png";
import styles from "./HomePageFooter.module.scss";
import Button from "../../../Components/Button";
import { TownTypesOptions } from "../../../Admin/Containers/CreateStoryPage/helpers";

const HomePageFooter = () => (
  <div className={styles.wrapper}>
    <Stack justify="space-between" className={styles.townWrapper}>
      {TownTypesOptions.map((town) => (
        <p>{town.label}</p>
      ))}
    </Stack>

    <div className={styles.footer}>
      <a href=" mailto:nirereduas@gmail.com?subject=Story%20suggestion">
        <Button className={styles.suggestButton}>Suggest a story</Button>
      </a>
      <img className={styles.dLogo} src={dLogo} alt="D logo" />
      <Button className={styles.supportButton}>Support local news</Button>
    </div>

    <Stack className={styles.footerFinePrint} justify="space-between">
      <p>©2021 Dundee Daily News. All rights reserved.</p>
      <a
        href="https://www.facebook.com/DundeeDailyNews"
        target="_blank"
        rel="noreferrer"
      >
        <p>Follow us on Facebook</p>
      </a>
    </Stack>
  </div>
);

export default HomePageFooter;
