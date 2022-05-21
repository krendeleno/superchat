import React from "react";

import { LastMessage } from "src/shared/types";
import { Tag } from "src/shared/components/Tag";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";

import styles from "./ChatCard.module.css";

export function ChatCard({ id }: { id: number | string }) {
  const { title, lastMessages, tags, color, creator } = ChatStore.chatArray[id];

  return (
    <div className={styles["ChatCard"]} style={{backgroundColor: themes[color].primary}}>
      <span className={styles["ChatCard-Title"]}>
        {title}
      </span>
      <div className={styles["ChatCard-Content"]} style={{border: `${themes[color].secondary} 2px dashed`}}>
        {tags.size !== 0 && <span className={styles['ChatCard-TagList']}>
          {[...tags.keys()].map((tag: string) => <Tag className={styles['ChatCard-Tag']} key={tag} tag={tag} color={color} small/>)}
        </span>}
        <span className={styles["ChatCard-Creator"]}>{creator}</span>
        {lastMessages.length &&
          lastMessages.map((lastMessage: LastMessage) => (
            <div
              className={styles["ChatCard-Message"]}
              key={lastMessage.message}
            >
              <span>{lastMessage.sender}: {lastMessage.message}</span>
            </div>
          ))}
        <div className={styles['ChatCard-Open']}
             style={{color: themes[color].secondary}}
        >открыть чат</div>
      </div>
    </div>
  );
}
