import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES } from "./actionTypes";

const initMessageState = {
    messageList: {},
};

export const messageReducer = (state = initMessageState, action) => {
    switch (action.type) {
        case MESSAGES_ADD_MESSAGE: {
            // const currentList = state.messageList[action.payload.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    // [action.payload.chatId]: [
                    //     ...currentList, {
                    //         ...action.payload.message,
                    //         id: `${action.payload.chatId}-${Date.now()}`,

                    [action.payload.chatId]: action.payload.messages,

                    //     }
                    // ],
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