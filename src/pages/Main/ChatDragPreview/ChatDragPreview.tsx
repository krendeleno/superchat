import { FC, CSSProperties, useEffect, useState, memo } from 'react'
import  ChatCard from '../ChatCard/ChatCard'

const styles: CSSProperties = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
}


export const ChatDragPreview = memo(
    function ChatDragPreview({id}: {id: number}) {

        return (
            <div style={styles}>
                <ChatCard id={id} />
            </div>
        )
    },
)