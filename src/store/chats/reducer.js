import { ADD_CHAT, DELETE_CHAT } from "./actionTypes";

const initChatState = {
    chatList: [
        {
            id: 'chat1',
            name: 'Chat 1'
        },
    ],
};

export const chatReducer = (state = initChatState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: action.payload,
            };
        case DELETE_CHAT: {
            const chats = state.chatList;
            return {
                ...state,
                chatList: chats.filter(item => item.id !== action.chatId),
            };
        };
        default:
            return state;
    }
}