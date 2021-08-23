import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGES, CHANGE_MESSAGES } from "./actionTypes";
import firebase from "firebase";
// import { AUTHORS } from '../../const';

// export const addMessage = (chatId, message) => ({
//     type: MESSAGES_ADD_MESSAGE,
//     payload: {
//         chatId,
//         message,
//     },
// });

export const deleteMessages = (chatId) => ({
    type: MESSAGES_DELETE_MESSAGES,
    payload: chatId,
});

// export const addMessageWithThunk = (chatId, message) => (dispatch) => {
//     dispatch(addMessage(chatId, message));
//     const botMessage = {
//         author: AUTHORS.bot,
//         text: 'hello with thunk',
//         id: `${chatId}-${Date.now()}`
//     }
//     setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
// };

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mess) => {
        messages.push(mess.val());
    });
    return { chatId: snapshot.key, messages }
};

export const addNewMessageWithFirebase = (chatId, message) => async () => {
    firebase.database()
        .ref('messages')
        .child(chatId)
        .chaild(message.id)
        .set(message);
};

export const initMessageTracking = () => (dispatch) => {
    firebase.database()
        .ref('message')
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

