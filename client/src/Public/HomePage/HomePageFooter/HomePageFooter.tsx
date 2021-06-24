import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import dLogo from "./images/dLogo.png";
import styles from "./HomePageFooter.module.scss";
import Button from "../../../Components/Button";
import { TownTypesOptions } from "../../../Admin/Containers/CreateStoryPage/helpers";
import { Link } from "react-router-dom";

const HomePageFooter = () => (
  <div className={styles.wrapper}>
    <div className={styles.body}>
      <Stack justify="space-between" className={styles.townWrapper}>
        {TownTypesOptions.map((town) => (
          <Link tabIndex={-1} to={`/neighborhood/${town.value}`}>
            <button tabIndex={0} className={styles.townLink}>
              {town.label}
            </button>
          </Link>
        ))}
      </Stack>

      <div className={styles.footer}>
        <a
          className={styles.suggestButton}
          href=" mailto:nirereduas@gmail.com?subject=Story%20suggestion"
          tabIndex={-1}
        >
          <Button>Suggest a story</Button>
        </a>
        <img className={styles.dLogo} src={dLogo} alt="D for dundee logo" />
        <Link to="/subscribe" tabIndex={-1}>
          <Button className={styles.supportButton}>Support local news</Button>
        </Link>
      </div>

      <Stack className={styles.footerFinePrint} justify="space-between">
        <p>©2021 Dundee Daily News. All rights reserved.</p>
        <a
          href="https://www.facebook.com/DundeeDailyNews"
          target="_blank"
          rel="noreferrer"
          className={styles.facebookLink}
        >
          <p>Follow us on Facebook</p>
        </a>
      </Stack>
    </div>
  </div>
);

export default HomePageFooter;
