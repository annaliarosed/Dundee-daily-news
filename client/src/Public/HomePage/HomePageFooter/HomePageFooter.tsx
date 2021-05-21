import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import dLogo from "./images/dLogo.png";
import styles from "./HomePageFooter.module.scss";
import Button from "../../../Components/Button";

const HomePageFooter = () => (
  <div className={styles.wrapper}>
    <Stack justify="space-between" className={styles.townWrapper}>
      <p>East dundee</p>
      <p>West dundee</p>
      <p>Carpentersville</p>
      <p>Sleepy hollow</p>
    </Stack>

    <div className={styles.footer}>
      <Button className={styles.suggestButton}>Suggest a story</Button>
      <img className={styles.dLogo} src={dLogo} alt="D logo" />
      <Button className={styles.supportButton}>Support local news</Button>
    </div>

    <Stack className={styles.footerFinePrint} justify="space-between">
      <p>©2021 Dundee Daily News. All rights reserved.</p>
      <p>Follow us on Facebook</p>
    </Stack>
  </div>
);

export default HomePageFooter;
