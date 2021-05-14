import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <Stack>
        <div className={styles.logo} />
        <div className={styles.menuLogo}>
          <div />
          <div />
          <div />
        </div>
      </Stack>
    </div>
  );
}

export default Header;
