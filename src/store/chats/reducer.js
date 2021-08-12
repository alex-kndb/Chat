import { CHATS_ADD_CHAT, CHATS_DELETE_CHAT } from "./actionTypes";

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
        case CHATS_ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `chat${state.chatList.length + 1}`,
                        name: action.chatName,
                    },
                ],
            };
        case CHATS_DELETE_CHAT: {
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