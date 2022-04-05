import { useDragLayer } from "react-dnd";
import styles from "./CustomDragLayer.module.css";
import { getItemStyles } from "./CustomDragLayer.helpers";
import { ItemTypes } from "src/types/ItemTypes";
import { ChatDragPreview } from "src/pages/Main/components/ChatDragPreview";

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
