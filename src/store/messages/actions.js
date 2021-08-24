import { DELETE_MESSAGES, CHANGE_MESSAGES } from "./actionTypes";
import firebase from "firebase";
import { AUTHORS } from '../../const';

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

export const deleteMessagesWithFirebase = (chatId) => async () => {
    firebase.database()
        .ref('messages')
        .child(chatId)
        .remove();
    console.log('Delete Messages With Firebase ----- DONE');
};

export const initMessageTracking = () => (dispatch) => {
    firebase.database()
        .ref('messages')
        .on('child_changed', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            // console.log('----------child changed payload--------', payload);
            dispatch({
                type: CHANGE_MESSAGES,
                payload,
            });
        });
    firebase.database()
        .ref('messages')
        .on('child_added', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            // console.log('----------child added payload--------', payload);
            dispatch({
                type: CHANGE_MESSAGES,
                payload,
            });
        });
    firebase.database()
        .ref('messages')
        .on('child_removed', (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            console.log('DELETE MESS payload-------', payload);
            dispatch({
                type: DELETE_MESSAGES,
                payload,
            });
        });

};