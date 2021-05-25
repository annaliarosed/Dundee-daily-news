import React from "react";
import cn from "classnames";

import { Stack } from "../../../Components/Stack/Stack";
import menu from "./menuImages/menu.png";
import menuDundeeSign from "./menuImages/menuDundeeSign.png";
import largeBullet from "./menuImages/largeBullet.png";
import xButton from "./menuImages/xButton.png";
import bullet from "./menuImages/bullet.png";

import styles from "./Menu.module.scss";
import {
  CategoryTypesOptions,
  TownTypesOptions,
} from "../../../Admin/Containers/CreateStoryPage/helpers";
import { navHeadlines } from "../helpers";
import { Link, useHistory } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, closeMenu }) => {
  const history = useHistory();
  console.log(history);
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.visible]: isOpen,
        [styles.notVisible]: !isOpen,
      })}
    >
      <div className={styles.body}>
        <Stack
          gap={8}
          className={styles.imageWrapper}
          direction="vertical"
          align="center"
        >
          <img src={menu} alt="menu headline" />
          <img
            className={styles.xButton}
            src={xButton}
            alt="close button"
            onClick={closeMenu}
          />
          <div className={styles.close}>Close</div>
        </Stack>

        <Stack
          align="flex-start"
          justify="space-around"
          className={styles.navWrapper}
        >
          <Stack direction="vertical">
            {navHeadlines.map((nav) => {
              if (nav === "Neighborhood") {
                return (
                  <Stack className={styles.subMenusWrapper}>
                    <div className={styles.neighborhood}>
                      <Stack align="center" className={styles.navItem}>
                        <button className={styles.largeButton}>{nav}</button>
                        <div
                          className={styles.largeBulletPoint}
                          style={{ backgroundImage: `url(${largeBullet})` }}
                        />
                      </Stack>
                      <div className={styles.underline} />

                      {TownTypesOptions.map((town) => (
                        <Stack align="center" className={styles.townWrapper}>
                          <button className={styles.smallButton}>
                            {town.label}
                          </button>
                          <div
                            className={styles.bulletPoint}
                            style={{ backgroundImage: `url(${bullet})` }}
                          />
                        </Stack>
                      ))}
                    </div>
                    <div className={styles.topicsWrapper}>
                      <Stack align="center" className={styles.navItem}>
                        <button className={styles.largeButton}>Topic</button>
                        <div
                          className={styles.largeBulletPoint}
                          style={{ backgroundImage: `url(${largeBullet})` }}
                        />
                      </Stack>
                      <div className={styles.underline} />

                      <Stack direction="vertical" className={styles.topics}>
                        {CategoryTypesOptions.map((category) => (
                          <Stack
                            align="center"
                            justify="flex-start"
                            className={cn(styles.topic)}
                          >
                            <button className={styles.smallButton}>
                              {category.label}
                            </button>
                            <div
                              className={styles.bulletPoint}
                              style={{ backgroundImage: `url(${bullet})` }}
                            />
                          </Stack>
                        ))}
                      </Stack>
                    </div>
                  </Stack>
                );
              }

              return (
                <Stack align="center" className={styles.navItem}>
                  <Link to={`${nav === "Home" && "/"}`}>
                    <button
                      className={styles.largeButton}
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      {nav}
                    </button>
                  </Link>
                  <div
                    className={styles.largeBulletPoint}
                    style={{ backgroundImage: `url(${largeBullet})` }}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          gap={8}
          className={cn(styles.imageWrapper, styles.right)}
          direction="vertical"
          align="center"
        >
          <img src={menuDundeeSign} alt="menu dundee sign" />
          <img src={largeBullet} alt="large bullet point" />
        </Stack>
      </div>
    </div>
  );
};

export default Menu;
