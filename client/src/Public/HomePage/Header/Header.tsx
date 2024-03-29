import React, { useState } from "react";
import styles from "./Header.module.scss";
import menuIcon from "./images/menuIcon.png";
import dundeeLogo from "./images/dundeeLogo.png";
import Button from "../../../Components/Button";
import { useHistory, useLocation } from "react-router-dom";
import Menu from "../Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.menuIcon} onClick={() => setIsMenuOpen(true)}>
          <img src={menuIcon} alt="menu icon" />
        </button>

        <button
          tabIndex={location.pathname !== "/" ? 0 : -1}
          onClick={() => {
            history.push("/");
          }}
          className={styles.logoButton}
        >
          <img
            className={styles.dundeeLogo}
            src={dundeeLogo}
            alt="Dundee daily news logo"
          />
        </button>

        <Button
          className={styles.subscribeButton}
          onClick={() => history.push("/subscribe")}
        >
          Subscribe
        </Button>
      </div>
      <div className={styles.underlines}></div>

      <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
