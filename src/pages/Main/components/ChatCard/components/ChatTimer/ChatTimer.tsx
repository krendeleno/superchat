import React from "react";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";

import { Message, ThemeColors } from "src/shared/types";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";

import styles from "./ChatTimer.module.css";
import { useTimer } from "react-timer-hook";

export type ChatTimerProps = {
  ttl: number;
  color: ThemeColors;
};

export const ChatTimer = observer(({ ttl, color }: ChatTimerProps) => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date(Date.now() + ttl),
    onExpire: () => console.warn("onExpire called"),
  });

  const getDigit = (value: number) =>
    value >= 10 ? value.toString() : "0" + value.toString();

  return (
    <motion.div
      className={styles["ChatTimer"]}
      style={{ backgroundColor: themes[color].secondary }}
    >
      <span className={styles["ChatTimer-Time"]}>{getDigit(hours)}:</span>
      <span className={styles["ChatTimer-Time"]}>{getDigit(minutes)}:</span>
      <span className={styles["ChatTimer-Time"]}>{getDigit(seconds)}</span>
    </motion.div>
  );
});
