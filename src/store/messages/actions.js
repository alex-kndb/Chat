import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES } from "./actionTypes";
import { AUTHORS } from '../../const';

export const addMessage = (chatId, message) => ({
    type: MESSAGES_ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

export const deleteMessages = (chatId) => ({
    type: MESSAGES_DELETE_MESSAGES,
    payload: chatId,
});

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));
    const botMessage = {
        author: AUTHORS.bot,
        text: 'hello with thunk',
        id: `${chatId}-${Date.now()}`
    }
    setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
};