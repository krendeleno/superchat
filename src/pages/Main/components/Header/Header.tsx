import React from "react";
import { observer } from "mobx-react";

import ChatStore from "src/stores/main.store";
import SvgLogo from "src/assets/Logo";

import styles from "./Header.module.css";

export const Header = observer(()  => {
  return (
    <div className={styles['Header']}>
      <SvgLogo className={styles['Header-Logo']} viewBox="600 -45 100 180" />
      <span className={styles['Header-User']}>
        {ChatStore.user}
      </span>
    </div>
  );
});
