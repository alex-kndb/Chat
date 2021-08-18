export const getChats = (state) => {
    return state.chats.chatList
};

export const getMessages = (state) => {
    return state.messages.messageList
};

export const getProfileState = (state) => {
    return state.profile
};