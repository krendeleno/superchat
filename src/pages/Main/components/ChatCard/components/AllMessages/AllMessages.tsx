import React from "react";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";

import { Message, ThemeColors } from "src/shared/types";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";

import styles from "./AllMessages.module.css";

export type AllMessagesProps = {
  id: number | string;
  color: ThemeColors;
  setInputFieldFocused?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AllMessages = observer(
  ({ id, color, setInputFieldFocused }: AllMessagesProps) => {
    const messages = ChatStore.chatArray[id].isOpen
      ? ChatStore.openChatsMessages[id] || []
      : ChatStore.chatArray[id].lastMessages;

    return (
      <motion.div
        layout="size"
        className={styles["AllMessages-List"]}
        style={{
          scrollbarColor: `${themes[color].secondary} rgba(255,255,255, 0.6)`,
        }}
      >
        <AnimatePresence>
          {Boolean(messages?.length) &&
            messages.map(({ sentAt, message, sender }: Message) => (
              <motion.div
                layout="size"
                className={styles["AllMessages-Message"]}
                key={sentAt}
                style={
                  ChatStore.chatArray[id].isOpen
                    ? {}
                    : { whiteSpace: "nowrap", overflow: "hidden" }
                }
              >
                <span
                  onMouseEnter={() =>
                    setInputFieldFocused && setInputFieldFocused(true)
                  }
                  onMouseLeave={() =>
                    setInputFieldFocused && setInputFieldFocused(false)
                  }
                >
                  {sender}: {message}
                </span>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    );
  }
);
