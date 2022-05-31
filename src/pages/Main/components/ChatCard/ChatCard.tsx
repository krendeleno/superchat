import React from "react";
import { action } from "mobx";
import { motion } from "framer-motion";

import { Tag } from "src/shared/components/Tag";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";
import { AllMessages } from "src/pages/Main/components/ChatCard/components/AllMessages";
import { Button } from "src/shared/components/Button";
import { Arrow } from "src/assets/icons";

import styles from "./ChatCard.module.css";
import TextareaAutosize from "react-textarea-autosize";
export function ChatCard({
  id,
  setInputFieldFocused,
  isDragging,
}: {
  id: number | string;
  setInputFieldFocused?: React.Dispatch<React.SetStateAction<boolean>>;
  isDragging?: boolean;
}) {
  const { title, tags, color, creator, isOpen } = ChatStore.chatArray[id];

  const handleCloseChat = action(() => {
    ChatStore.chatArray[id].isOpen = false;
  });

  const handleOpenChat = action(() => {
    ChatStore.fetchChatMessages(id);
    ChatStore.chatArray[id].isOpen = true;
  });

  const handleInputChange = action(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      ChatStore.chatArray[id].inputText = event.target.value;
    }
  );

  return (
    <motion.div
      initial={isDragging === undefined ? {} : { opacity: 0, scale: 0.5 }}
      animate={isDragging === undefined ? {} : { opacity: 1, scale: 1 }}
      exit={isDragging === undefined ? {} : { opacity: 0, scale: 0.5 }}
      layout="size"
      transition={{ duration: 0.2 }}
      className={styles["ChatCard"]}
      style={{ backgroundColor: themes[color].primary }}
    >
      <span className={styles["ChatCard-Title"]} title={title}>
        {title}
      </span>
      <div
        className={styles["ChatCard-Content"]}
        style={{
          border: `${themes[color].secondary} 3px dashed`,
          backgroundColor: isOpen ? "rgba(255,255,255, 0.6)" : "",
        }}
      >
        {tags.size !== 0 && (
          <span className={styles["ChatCard-TagList"]}>
            {[...tags.keys()].map((tag: string) => (
              <Tag
                className={styles["ChatCard-Tag"]}
                key={tag}
                tag={tag}
                color={color}
                small
              />
            ))}
          </span>
        )}

        <span className={styles["ChatCard-Creator"]}>{creator}</span>

        <AllMessages
          color={color}
          id={id}
          setInputFieldFocused={setInputFieldFocused}
        />

        {!isOpen && (
          <Button
            className={styles["ChatCard-Button"]}
            style={{
              color: themes[color].text,
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
            onClick={handleOpenChat}
          >
            <span>открыть чат</span>
          </Button>
        )}
      </div>
      {isOpen && (
        <div className={styles["ChatCard-Send"]}>
          <TextareaAutosize
            className={styles["ChatCard-Textarea"]}
            style={{
              border: `${themes[color].secondary} 3px dashed`,
              scrollbarColor: `${themes[color].secondary} rgba(255,255,255, 0.6)`,
            }}
            onChange={handleInputChange}
            value={ChatStore.chatArray[id].inputText}
            onFocus={() => setInputFieldFocused && setInputFieldFocused(true)}
            onBlur={() => setInputFieldFocused && setInputFieldFocused(false)}
            minRows={2}
            maxRows={6}
          />
          <Arrow className={styles["ChatCard-SendIcon"]} />
        </div>
      )}
      {isOpen && (
        <Button
          className={styles["ChatCard-Button"]}
          style={{ color: themes[color].text }}
          onClick={handleCloseChat}
        >
          <span>закрыть чат</span>
        </Button>
      )}
    </motion.div>
  );
}
