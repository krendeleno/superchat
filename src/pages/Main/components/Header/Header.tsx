import React from "react";
import { observer } from "mobx-react";

import ChatStore from "src/stores/main.store";

import styles from "./Header.module.css";

export const Header = observer(()  => {
  return (
    <div className={styles['Header']}>
      <span>
        Superchat
      </span>
      <span className={styles['Header-User']}>
        {ChatStore.user}
      </span>
    </div>
  );
});
