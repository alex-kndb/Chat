import { MESSAGES_DELETE_MESSAGES, CHANGE_MESSAGES } from "./actionTypes";
import firebase from "firebase";
import { AUTHORS } from '../../const';

export const deleteMessages = (chatId) => ({
    type: MESSAGES_DELETE_MESSAGES,
    payload: chatId,
});

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mess) => {
        messages.push(mess.val());
    });
    return { chatId: snapshot.key, messages }
};

export const addNewMessageWithFirebase = (chatId, message) => async () => {
    firebase.database().ref('messages').child(chatId).child(message.id).set(message);
    const botMessage = {
        author: AUTHORS.bot,
        text: 'hello with thunk',
    }
    const botId = `${message.id}_botAnswer`;
    setTimeout(() => firebase.database().ref('messages').child(chatId).child(botId).set(botMessage), 1500);
};

export const initMessageTracking = () => (dispatch) => {
    firebase.database()
        .ref('messages')
        .on('child_changed', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            dispatch({
                type: CHANGE_MESSAGES,
                payload,
            });
        });
};

export const deleteMessagesWithFirebase = (chatId) => async () => {
    firebase.database()
        .ref('messages')
        .child(chatId)
        .remove();
};

