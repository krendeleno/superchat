import React from "react";
import { observer } from "mobx-react";

import ChatStore from "src/stores/main.store";

import styles from "./AddChatButton.module.css";

export const AddChatButton = observer(()  => {
  return (
    <div className={styles['AddChatButton']}>
      <span className={styles['AddChatButton-Text']}>создать чат</span>
    </div>
  );
});
