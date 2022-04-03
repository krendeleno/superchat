import {makeAutoObservable, action, runInAction} from "mobx"
import axiosMockAdapterInstance from '../mocks/axiosInstance.js'
import {Chat} from "../types";


class ChatStore {
    chatArray: Chat[] = []
    state: "pending" | "done" | "error" = "pending"

    constructor() {
        makeAutoObservable(this)
    }

    fetchChats() {
        this.chatArray = [];
        axiosMockAdapterInstance.get(`/api/v1/chats`)
            .then(res =>
                runInAction(() => {
                    this.chatArray = res.data;
                })
            )
    }
}

export default new ChatStore;