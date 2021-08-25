import { ADD_CHAT, DELETE_CHAT } from "./actionTypes";
import firebase from "firebase";

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    chatName,
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});

export const addNewChatWithFirebase = (chatName, chats) => async () => {
    const newChat = {
        id: `chat${chats.length + 1}`,
        name: chatName,
    }
    firebase.database().ref('chats').child(newChat.id).set(newChat);
};

const getPayloadFromSnapshot = (snapshot) => {
    const chats = [];
    snapshot.forEach((chat) => {
        chats.push(chat.val());
    });
    return chats
};

export const initChatTracking = () => (dispatch) => {
    firebase.database()
        .ref('chats')
        .on('value', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            dispatch({
                type: ADD_CHAT,
                payload,
            });
        });
};