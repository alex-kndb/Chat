import { CHANGE_MESSAGES, DELETE_MESSAGES } from "./actionTypes";

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
        case DELETE_MESSAGES: {
            const newState = { ...state };
            console.log(action.payload.chatId);
            delete newState.messageList[`${action.payload.chatId}`];
            return newState;
        }
        default:
            return state;
    }
}