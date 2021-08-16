import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES } from "./actionTypes";

export const addMessage = (chatId, newMessage) => ({
    type: MESSAGES_ADD_MESSAGE,
    chatId,
    newMessage,
});

export const deleteMessages = (chatId) => ({
    type: MESSAGES_DELETE_MESSAGES,
    payload: chatId,
});