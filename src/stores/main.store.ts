import { makeAutoObservable, runInAction } from "mobx";
import mapValues from "lodash/mapValues";
import keyBy from "lodash/keyBy";

import axiosMockAdapterInstance from "src/shared/mocks/axiosInstance.js";
import { Chat, ChatMap } from "src/shared/types";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

class ChatStore {
  user: string = "krendeleno";
  chatArray = {} as ChatMap;
  selectedTags: Set<string> = new Set();
  tagArray: Set<string> = new Set();
  state: "pending" | "done" | "error" = "pending";
  userWidth: number = 0;
  chatWidth: number = 0;
  chatHeight: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTags() {
    this.tagArray = new Set();
    axiosMockAdapterInstance.get(`/api/v1/tags`).then(res => {
      runInAction(
        () => this.tagArray = new Set(res.data)
      )
    })
  }

  fetchChats() {
    this.chatArray = {} as ChatMap;
    axiosMockAdapterInstance.get(`/api/v1/chats`).then((res) =>
      runInAction(
        () =>
          (this.chatArray = mapValues(keyBy(res.data, "id"), (chat: Chat) => ({
            ...chat,
            tags: new Set(chat.tags),
            top: getRandomInt(500),
            left: getRandomInt(1000),
          })) as unknown as ChatMap)
      )
    );
  }

  moveBox(id: string | number, left: number, top: number) {
    this.chatArray[id].left = left;
    this.chatArray[id].top = top;
  }

  changeTags(tag: string) {
    if (this.selectedTags.has(tag))
      this.selectedTags.delete(tag);
    else
      this.selectedTags.add(tag)
  }
}

export default new ChatStore();
