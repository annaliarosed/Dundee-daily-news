import React from "react";
import styles from "./Header.module.scss";
import menuIcon from "./images/menuIcon.png";
import dundeeLogo from "./images/dundeeLogo.png";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import Menu from "../Menu";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.menuIcon} src={menuIcon} alt="menu icon" />

        <Link to="/">
          <img
            className={styles.dundeeLogo}
            src={dundeeLogo}
            alt="Dundee daily news"
          />
        </Link>

        <Button className={styles.subscribeButton}>Subscribe</Button>
      </div>
      <div className={styles.underlines}></div>

      <Menu isOpen={true} />
    </header>
  );
}

export default Header;
