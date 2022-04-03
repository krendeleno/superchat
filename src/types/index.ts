export type LastMessage = {
    sender: string,
    message: string
}

export type Chat = {
    id: number,
    title: string,
    ttl: number,
    tags: string[],
    creator: string,
    lastMessages: LastMessage[]
}