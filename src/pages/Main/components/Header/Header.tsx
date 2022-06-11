import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import ChatStore from "src/stores/main.store";
import SvgLogo from "src/assets/Logo";
import { Logout } from "src/assets/icons";
import { ThemeContext } from "src/shared/themes";

import { ThemeSwitch } from "src/pages/Main/components/Header/components/ThemeSwitch";

import styles from "./Header.module.css";

export const Header = observer(() => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles["Header"]} style={{ backgroundColor: theme.header }}>
      <SvgLogo
        className={styles["Header-Logo"]}
        viewBox="600 -45 100 180"
        color={theme.logo}
      />
      <div className={styles["Header-Logout"]}>
        <ThemeSwitch onChange={toggleTheme} apptheme={theme} />
        <span className={styles["Header-User"]}>{ChatStore.user}</span>
        <Link to="login">
          <Logout />
        </Link>
      </div>
    </div>
  );
});
