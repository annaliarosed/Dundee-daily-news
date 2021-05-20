import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import styles from "./Header.module.scss";
import menuIcon from "./images/menuIcon.png";
import dundeeLogo from "./images/dundeeLogo.png";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Stack justify="space-between" align="center" className={styles.header}>
        <img className={styles.menuIcon} src={menuIcon} alt="menu icon" />
        <Stack direction="vertical">
          <img
            className={styles.dundeeLogo}
            src={dundeeLogo}
            alt="Dundee daily news"
          />
        </Stack>
        <button className={styles.subscribeButton}>Subscribe</button>
      </Stack>
      <div className={styles.underlines}></div>
    </header>
  );
}

export default Header;
