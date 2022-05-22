export type Message = {
    sender: string;
    message: string;
    sentAt: string;
};

export type ThemeColors =  "blue" | "red" | "yellow" | "green"

export type Chat = {
    id: number | string;
    title: string;
    ttl: number;
    tags: any;
    creator: string;
    color: ThemeColors;
    lastMessages: Message[];
};

export type ChatMap = {
    [id: string | number]: Omit<Chat, "id"> & { top: number; left: number };
};

export type ChatMessages = {
    [id: string | number]: { messages: Message[], top: number; left: number };
}

export interface DragItem {
    id: number | string;
    type: string;
    left: number;
    top: number;
}