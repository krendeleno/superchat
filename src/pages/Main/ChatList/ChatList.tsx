import React, {useEffect, useRef} from "react";
import styles from "./ChatList.module.css"
import {observer} from "mobx-react";
import ChatCard from "../ChatCard/ChatCard";
import {Chat} from "../../../types";
import { CSSProperties, FC, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../../types/ItemTypes'
import update from 'immutability-helper'
import DraggableChatCard from "../DraggableChatCard/ChatCard";
import _ from "lodash";
import {observable} from "mobx";
import ChatStore from "../../../stores/main.store";

export interface DragItem {
    id: number | string
    type: string
    left: number
    top: number
}

const ChatList = observer(() => {
    useEffect(() => {
        ChatStore.fetchChats()
    }, [ChatStore])

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
                <DraggableChatCard id={key} key={key} {...(ChatStore.chatArray[key] as { top: number; left: number; })} />
            ))}
        </div>
    );
});

export default ChatList;