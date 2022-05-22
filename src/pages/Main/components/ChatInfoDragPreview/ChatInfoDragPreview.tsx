import { memo } from "react";

import { ChatInfoCard } from "src/pages/Main/components/ChatInfoCard";

import styles from "./ChatInfoDragPreview.module.css";

export const ChatInfoDragPreview = memo(function ChatDragPreview({
  id,
}: {
  id: number;
}) {
  return (
    <div className={styles["ChatCardInfoPreview"]}>
      <ChatInfoCard id={id} />
    </div>
  );
});

export default ChatInfoDragPreview;
