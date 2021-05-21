import React from "react";
import styles from "./Header.module.scss";
import menuIcon from "./images/menuIcon.png";
import dundeeLogo from "./images/dundeeLogo.png";
import Button from "../../../Components/Button";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.menuIcon} src={menuIcon} alt="menu icon" />

        <img
          className={styles.dundeeLogo}
          src={dundeeLogo}
          alt="Dundee daily news"
        />

        <Button className={styles.subscribeButton}>Subscribe</Button>
      </div>
      <div className={styles.underlines}></div>
    </header>
  );
}

export default Header;
