import { CHANGE_MESSAGES, MESSAGES_DELETE_MESSAGES } from "./actionTypes";

const initMessageState = {
    messageList: {},
};

export const messageReducer = (state = initMessageState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: action.payload.messages,
                },
            };
        };
        case MESSAGES_DELETE_MESSAGES: {
            const newState = { ...state };
            delete newState.messageList[action.payload];
            return newState;
        }
        default:
            return state;
    }
}