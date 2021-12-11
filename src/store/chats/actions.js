import { ADD_CHAT, DELETE_CHAT } from "./actionTypes";
import firebase from "firebase";

export const addNewChatWithFirebase = (chatName, chats) => async () => {
    const newChat = {
        id: `chat${chats.length + 1}`,
        name: chatName,
    }
    firebase.database().ref('chats').child(newChat.id).set(newChat);
};

export const deleteChatWithFirebase = (chatId) => async () => {
    firebase.database()
        .ref('chats')
        .child(chatId)
        .remove();
    console.log('Delete Chat With Firebase ----- DONE');
};

const getPayloadFromSnapshot = (snapshot) => {
    // console.log('snapshot.val()', snapshot.val());
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
    firebase.database()
        .ref('chats')
        .on('child_removed', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            dispatch({
                type: DELETE_CHAT,
                payload,
            });
        });
};