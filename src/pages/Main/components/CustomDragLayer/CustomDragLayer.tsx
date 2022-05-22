import { useDragLayer } from "react-dnd";

import { ItemTypes } from "src/shared/types/ItemTypes";
import { ChatDragPreview } from "src/pages/Main/components/ChatDragPreview";
import { ChatInfoDragPreview } from "src/pages/Main/components/ChatInfoDragPreview";

import { getItemStyles } from "./CustomDragLayer.helpers";

import styles from "./CustomDragLayer.module.css";


export const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  if (!isDragging) {
    return null;
  }

  function renderItem() {
    switch (itemType) {
      case ItemTypes.CHAT:
        return <ChatDragPreview id={item.id} />;
      case ItemTypes.CHAT_INFO:
        return <ChatInfoDragPreview id={item.id} />;
      default:
        return null;
    }
  }

  return (
    <div className={styles["CustomDragLayer"]}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};
