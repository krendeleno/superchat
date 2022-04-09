export type LastMessage = {
    sender: string;
    message: string;
};

export type Chat = {
    id: number | string;
    title: string;
    ttl: number;
    tags: string[];
    creator: string;
    lastMessages: LastMessage[];
};

export type ChatMap = {
    [id: string | number]: Omit<Chat, "id"> & { top: number; left: number };
};

export interface DragItem {
    id: number | string;
    type: string;
    left: number;
    top: number;
}