import React from "react";
import { observer } from "mobx-react";

import { Message, ThemeColors } from "src/shared/types";
import ChatStore from "src/stores/main.store";

import styles from "./AllMessages.module.css";
import { themes } from "src/shared/constants";


export type AllMessagesProps = {
  id: number | string,
  color: ThemeColors;
}

export const AllMessages = observer(({id, color}: AllMessagesProps)  => {
  const messages = ChatStore.openChatsMessages[id] || [];

  return (
    <>
      <div className={styles['AllMessages-List']} style={{scrollbarColor: `${themes[color].secondary} rgba(255,255,255, 0.6)`}}>
        {Boolean(messages.length) &&
          messages.map(({sentAt, message, sender}: Message) => (
            <div
              className={styles['AllMessages-Message']}
              key={sentAt}
            >
              <span>{sender}: {message}</span>
            </div>
          ))}
      </div>

    </>
  );
});
