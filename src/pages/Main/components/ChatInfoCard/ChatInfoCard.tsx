import React from "react";
import { observer } from "mobx-react";

import styles from "./ChatInfoCard.module.css";
import ChatStore from "src/stores/main.store";

export type ChatInfoCardProps = {
  id: number | string
}

export const ChatInfoCard = observer(({ id }: ChatInfoCardProps)  => {
  const { title, tags, color, creator } = ChatStore.chatArray[id];

  return (
    <div className={styles['ChatInfoCard']}>
      {title}
    </div>
  );
});
