import {makeAutoObservable, action, runInAction} from "mobx"
import axiosMockAdapterInstance from '../mocks/axiosInstance.js'
import {Chat, ChatMap} from "../types";
import _ from "lodash";
import {useCallback} from "react";
import update from "immutability-helper";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

class ChatStore {
    chatArray = <ChatMap>{};
    state: "pending" | "done" | "error" = "pending"

    constructor() {
        makeAutoObservable(this)
    }

    fetchChats() {
        this.chatArray = <ChatMap>{};
        axiosMockAdapterInstance.get(`/api/v1/chats`)
            .then(res =>
                runInAction(() =>
                    this.chatArray = _.mapValues(_.keyBy(res.data, 'id'), (chat: Chat) => ({
                        ...chat,
                        top: getRandomInt(500),
                        left: getRandomInt(1000)
                    })) as unknown as ChatMap
                )
            )
    }

    moveBox(id: string | number, left: number, top: number) {
        this.chatArray[id].left = left;
        this.chatArray[id].top = top;
    }
}

export default new ChatStore;