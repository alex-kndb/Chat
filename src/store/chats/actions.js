import { CHATS_ADD_CHAT, CHATS_DELETE_CHAT } from "./actionTypes";

export const addChat = (chatName) => ({
    type: CHATS_ADD_CHAT,
    chatName,
});

export const deleteChat = (chatId) => ({
    type: CHATS_DELETE_CHAT,
    chatId,
});