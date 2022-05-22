import React from "react";
import { FC, memo, useEffect } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { ChatInfoCard } from "src/pages/Main/components/ChatInfoCard";
import { ItemTypes } from "src/shared/types/ItemTypes";
import { DragItem } from "src/shared/types";

import { getStyles } from "./DraggableChatInfoCard.helpers";

export const DraggableChatInfoCard: FC<Omit<DragItem, "type">> = memo(
  function DraggableBox({ id, left, top }) {
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: ItemTypes.CHAT_INFO,
        item: { id, left, top },
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, left, top]
    );

    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    return (
      <div
        ref={drag}
        style={getStyles(left, top, isDragging)}
        role="DraggableBox"
      >
        <ChatInfoCard id={id} />
      </div>
    );
  }
);
