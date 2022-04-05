import React, {useEffect} from "react";
import styles from "./ChatList.module.css"
import {observer} from "mobx-react";
import { useDrop } from 'react-dnd'
import { ItemTypes } from 'src/types/ItemTypes'
import { DragItem } from 'src/types'
import { DraggableChatCard } from "src/pages/Main/components/DraggableChatCard";
import ChatStore from "src/stores/main.store";

export const ChatList = observer(() => {
    useEffect(() => {
        ChatStore.fetchChats()
    }, [])

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.CHAT,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as {
                    x: number
                    y: number
                }

                let left = Math.round(item.left + delta.x)
                let top = Math.round(item.top + delta.y)

                ChatStore.moveBox(item.id, left, top)
                return undefined
            },
        }),
        [ChatStore.moveBox],
    )
    return (
        <div ref={drop} className={styles['ChatList']}>
            {Object.keys(ChatStore.chatArray).map((key) => (
                <DraggableChatCard id={key} key={key} {...ChatStore.chatArray[key]} />
            ))}
        </div>
    );
});