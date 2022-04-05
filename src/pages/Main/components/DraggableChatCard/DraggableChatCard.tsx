import React from "react";
import { ChatCard } from "src/pages/Main/components/ChatCard";
import { FC, memo, useEffect } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from 'src/types/ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'
import {getStyles} from './DraggableChatCard.helpers'
import {DragItem} from "src/types";

export const DraggableChatCard: FC<Omit<DragItem, 'type'>> = memo(function DraggableBox(
    { id, left, top },
) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.CHAT,
            item: { id, left, top },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [preview])

    return (
        <div
            ref={drag}
            style={getStyles(left, top, isDragging)}
            role="DraggableBox">
                <ChatCard id={id}/>
        </div>
    );
})