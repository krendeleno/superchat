import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./ChatCard.module.css"
import {Chat, LastMessage} from "../../../types";
import ChatCard from "../ChatCard/ChatCard";
import { CSSProperties, FC, memo, useEffect } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from '../../../types/ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'


function getStyles(
    left: number,
    top: number,
    isDragging: boolean,
): CSSProperties {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    }
}

export interface DraggableBoxProps {
    id: number | string
    left: number
    top: number
}

export const DraggableChatCard: FC<DraggableBoxProps> = memo(function DraggableBox(
    props,
) {
    const { id, left, top } = props
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
    }, [])
    return (
        <div
            ref={drag}
            style={getStyles(left, top, isDragging)}
            role="DraggableBox"
        >

         <ChatCard id={id}/>
        </div>
    );
})

export default DraggableChatCard;