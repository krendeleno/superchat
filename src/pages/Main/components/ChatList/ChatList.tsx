import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "src/shared/types/ItemTypes";
import { DragItem } from "src/shared/types";
import { DraggableChatCard } from "src/pages/Main/components/DraggableChatCard";
import ChatStore from "src/stores/main.store";

import styles from "./ChatList.module.css";
import { DraggableChatInfoCard } from "src/pages/Main/components/DraggableChatInfoCard";

export const ChatList = observer(() => {
  useEffect(() => {
    ChatStore.fetchChats();
  }, []);

  const checkTags = (chatTags: Set<string>, selectedTags: Set<string>) => {
    for (let tag of Array.from(chatTags)) {
      if (selectedTags.has(tag))
        return true;
    }
    return false;
  }

  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CHAT, ItemTypes.CHAT_INFO],
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);

        const type = monitor.getItemType()

        type === ItemTypes.CHAT ? ChatStore.moveBox(item.id, left, top) : ChatStore.moveChatInfoBox(item.id, left, top)
        return undefined;
      },
    }),
    [ChatStore.moveBox]
  );
  return (
    <div ref={drop} className={styles["ChatList"]}>
      {Object.keys(ChatStore.chatArray)
        .filter(id => ChatStore.selectedTags.size === 0 || checkTags(ChatStore.chatArray[id].tags, ChatStore.selectedTags))
        .map((key) => (
        <DraggableChatCard id={key} key={key} {...ChatStore.chatArray[key]} />
      ))}
      {Object.keys(ChatStore.openChatsMessages)
        .map((key) => (
          <DraggableChatInfoCard id={key} key={key} {...ChatStore.openChatsMessages[key]} />
        ))}
    </div>
  );
});
