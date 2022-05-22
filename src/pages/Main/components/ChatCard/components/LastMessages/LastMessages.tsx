import React from "react";
import { observer } from "mobx-react";

import { Message } from "src/shared/types";
import ChatStore from "src/stores/main.store";

import styles from "./LastMessages.module.css";

export type LastMessagesProps = {
  id: number | string,
}

export const LastMessages = observer(({id}: LastMessagesProps)  => {
  const { lastMessages } = ChatStore.chatArray[id];

  return (
    <>
      {lastMessages.length &&
        lastMessages.map((lastMessage: Message) => (
          <div
            className={styles['LastMessages-Message']}
            key={lastMessage.message}
          >
            <span>{lastMessage.sender}: {lastMessage.message}</span>
          </div>
        ))}

    </>
  );
});
