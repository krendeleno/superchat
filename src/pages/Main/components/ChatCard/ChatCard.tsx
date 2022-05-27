import React from "react";

import { Tag } from "src/shared/components/Tag";
import ChatStore from "src/stores/main.store";
import { themes } from "src/shared/constants";
import { LastMessages } from "src/pages/Main/components/ChatCard/components/LastMessages";
import { AllMessages } from "src/pages/Main/components/ChatCard/components/AllMessages";
import { Button } from "src/shared/components/Button";
import { Arrow } from "src/assets/icons";

import styles from "./ChatCard.module.css";

export function ChatCard({ id }: { id: number | string }) {
  const { title, tags, color, creator, isOpen } = ChatStore.chatArray[id];

  const handleCloseChat = () => {
    ChatStore.setIsOpen(id, false);
  };

  const handleOpenChat = () => {
    ChatStore.fetchChatMessages(id);
    ChatStore.setIsOpen(id, true);
  };

  return (
    <div className={styles["ChatCard"]} style={{ backgroundColor: themes[color].primary }}>
      <span className={styles["ChatCard-Title"]} title={title}>
        {title}
      </span>

      <div className={styles["ChatCard-Content"]} style={{
        border: `${themes[color].secondary} 3px dashed`,
        backgroundColor: isOpen ? "rgba(255,255,255, 0.6)" : ""
      }}>
        {tags.size !== 0 && <span className={styles["ChatCard-TagList"]}>
          {[...tags.keys()].map((tag: string) => <Tag className={styles["ChatCard-Tag"]} key={tag} tag={tag}
                                                      color={color} small />)}
        </span>}

        <span className={styles["ChatCard-Creator"]}>{creator}</span>

        {isOpen ? <AllMessages color={color} id={id} /> : <LastMessages id={id} />}

        {!isOpen && <Button className={styles["ChatCard-Button"]}
                            style={{ color: themes[color].text }}
                            onClick={handleOpenChat}
        ><span>открыть чат</span></Button>}
      </div>
      {isOpen && <div className={styles['ChatCard-Send']}>
        <textarea className={styles['ChatCard-Textarea']} onClick={e => e.stopPropagation()}
                  style={{
          border: `${themes[color].secondary} 3px dashed`, scrollbarColor: `${themes[color].secondary} rgba(255,255,255, 0.6)`}}/>
        <Arrow className={styles['ChatCard-SendIcon']} />
      </div>}
      {isOpen && <Button className={styles["ChatCard-Button"]}
                         style={{ color: themes[color].text }}
                         onClick={handleCloseChat}
      ><span>закрыть чат</span></Button>}
    </div>
  );
}
