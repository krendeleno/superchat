import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { observer } from "mobx-react";
import { action } from "mobx";

import { themes } from "src/shared/constants";
import ChatStore from "src/stores/main.store";

import { getDigit } from "src/pages/Main/components/ChatCard/components/ChatTimer";

import styles from "src/pages/Main/components/ChatCard/components/ChatTimer/ChatTimer.module.css";


export type ChatTimerProps = {
  id: number | string;
};

export const ChatTimer = observer(({ id }: ChatTimerProps) => {
  const { color } = ChatStore.chatArray[id];

  const now = Date.now();
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: new Date(now + ChatStore.chatArray[id].ttl),
    onExpire: action(() => delete ChatStore.chatArray[id]),
  });

  useEffect(() => {
    restart(new Date(now + ChatStore.chatArray[id].ttl));
    return action(() => {
      ChatStore.chatArray[id].ttl =
        ChatStore.chatArray[id].ttl - (Date.now() - now);
      console.log(ChatStore.chatArray[id].ttl);
    });
  }, []);

  return (
    <div
      className={styles["ChatTimer"]}
      style={{ backgroundColor: themes[color].secondary }}
    >
      <span className={styles["ChatTimer-Time"]}>{getDigit(hours)}:</span>
      <span className={styles["ChatTimer-Time"]}>{getDigit(minutes)}:</span>
      <span className={styles["ChatTimer-Time"]}>{getDigit(seconds)}</span>
    </div>
  );
});
