import React from "react";
import styles from "./ChatList.module.css"
import {observer} from "mobx-react";
import ChatCard from "../ChatCard/ChatCard";
import {Chat} from "../../../types";


const ChatList = observer(({chats}: {chats: Chat[]}) => {

    return (
        <div>
            {chats && chats.map((chat) => {
                return <ChatCard key={chat.id} {...chat} />
            })}
        </div>
    );
});

export default ChatList;