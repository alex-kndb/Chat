import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES } from "./actionTypes";

const initMessageState = {
    messageList: {
    },
};

export const messageReducer = (state = initMessageState, action) => {
    switch (action.type) {
        case MESSAGES_ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList, {
                            ...action.newMessage,
                            id: `${action.chatId}-${Date.now()}`,
                        }
                    ],
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