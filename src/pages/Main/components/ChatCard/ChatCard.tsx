import React from "react";
import { action } from "mobx";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { Tag } from "src/shared/components/Tag";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";
import { AllMessages } from "src/pages/Main/components/ChatCard/components/AllMessages";
import { Button } from "src/shared/components/Button";
import { Arrow } from "src/assets/icons";

import styles from "./ChatCard.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { ChatTimer } from "src/pages/Main/components/ChatCard/components/ChatTimer";
export function ChatCard({
  id,
  setInputFieldFocused,
  isDragging,
}: {
  id: number | string;
  setInputFieldFocused?: React.Dispatch<React.SetStateAction<boolean>>;
  isDragging?: boolean;
}) {
  const { title, tags, color, creator, isOpen, ttl } = ChatStore.chatArray[id];

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
    <AnimateSharedLayout>
      <motion.div
        initial={isDragging === undefined ? {} : { opacity: 0, scale: 0.5 }}
        animate={isDragging === undefined ? {} : { opacity: 1, scale: 1 }}
        exit={isDragging === undefined ? {} : { opacity: 0, scale: 0.5 }}
        layout="size"
        transition={{ duration: 0.2 }}
        className={styles["ChatCard"]}
        style={{ backgroundColor: themes[color].primary }}
      >
        <motion.span
          layout="size"
          className={styles["ChatCard-Title"]}
          title={title}
        >
          {title}
        </motion.span>
        <motion.div
          layout="size"
          className={styles["ChatCard-Content"]}
          style={{
            border: `${themes[color].secondary} 3px dashed`,
            backgroundColor: isOpen ? "rgba(255,255,255, 0.6)" : "",
          }}
        >
          {tags.size !== 0 && (
            <motion.span layout="size" className={styles["ChatCard-TagList"]}>
              {[...tags.keys()].map((tag: string) => (
                <Tag
                  className={styles["ChatCard-Tag"]}
                  key={tag}
                  tag={tag}
                  color={color}
                  small
                />
              ))}
            </motion.span>
          )}

          <motion.span layout="size" className={styles["ChatCard-Creator"]}>
            {creator}
          </motion.span>

          <AllMessages
            color={color}
            id={id}
            setInputFieldFocused={setInputFieldFocused}
          />

          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles["ChatCard-LowerPart"]}
            >
              <ChatTimer ttl={ttl} color={color} />
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
            </motion.div>
          )}
        </motion.div>
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
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles["ChatCard-LowerPart"]}
          >
            <ChatTimer ttl={ttl} color={color} />
            <Button
              className={styles["ChatCard-Button"]}
              style={{ color: themes[color].text }}
              onClick={handleCloseChat}
            >
              <span>закрыть чат</span>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
}
