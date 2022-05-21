import { memo } from "react";

import { ChatCard } from "src/pages/Main/components/ChatCard";

import styles from "./ChatDragPreview.module.css";

export const ChatDragPreview = memo(function ChatDragPreview({
  id,
}: {
  id: number;
}) {
  return (
    <div className={styles["ChatCardPreview"]}>
      <ChatCard id={id} />
    </div>
  );
});

export default ChatDragPreview;
