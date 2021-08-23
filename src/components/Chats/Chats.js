import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import FormDialog from '../FormDialog/FormDialog';
import { getChats, getMessages } from '../../store/selectors';
import { deleteChat } from '../../store/chats/actions';
import { deleteMessages } from '../../store/messages/actions';
// import { addMessageWithThunk } from '../../store/messages/actions';
// import firebase from 'firebase';
import { addNewMessageWithFirebase, initMessageTracking } from '../../store/messages/actions';
import './Chats.css';

export const Chats = () => {
    // const [messages, setMessages] = useState([]);
    // const handleSendMessage = useCallback((message) => {
    //     firebase.database()
    //         .ref('messages')
    //         .child(chatId)
    //         .child(message.id)
    //         .set(message);
    // }, [chatId]);

    // useEffect(() => {
    //     firebase.database()
    //         .ref('messages')
    //         .child(chatId)
    //         .on('value', (snapshot) => {
    //             const mewMessage = [];
    //             snapshot.forEach(snap => {
    //                 messages.push(snap.val());
    //             });
    //             setMessages(mewMessages);
    //         });
    // }, []);

    // получение данных
    const { chatId } = useParams();
    const chats = useSelector(getChats, shallowEqual);
    const messages = useSelector(getMessages, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('chatId-------------', chatId);
    console.log('chats--------------', chats);
    console.log('messages-----------', messages);

    // отправка сообщений через firebase
    const handleSendMessage = useCallback((message) => {
        dispatch(addNewMessageWithFirebase(chatId, {
            ...message,
            id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
        }));
    }, [chatId]);

    useEffect(() => {
        dispatch(initMessageTracking());
    }, []);

    // отправка сообщений через Thunk
    // const handleSendMessage = useCallback((message) => {
    //     dispatch(addMessageWithThunk(chatId, message));
    // }, [dispatch, chatId]);

    // удаление чатов
    const removeChat = useCallback((id) => {
        dispatch(deleteMessages(id));
        dispatch(deleteChat(id));
    }, [dispatch]);

    const findChat = useCallback(() => chats.filter(el => el.id === chatId), [chats, chatId]);


    if (chatId && !findChat(chatId).length) {
        history.replace('/nochat');
    };

    return (
        <div className="main-wrapper">
            <div className="App-content">
                <header className="App-header">
                    <div className="App-header__wrapper">
                        <FormDialog />
                        <h3 className="App-header__title">Chats</h3>
                    </div>
                </header>
                <main className="main">
                    <ChatList
                        chatId={chatId}
                        chats={chats}
                        removeChat={removeChat} />
                    {!!chatId &&
                        <div className="chatbox">
                            <MessageList
                                chatId={chatId}
                                messages={messages} />
                            <Form onSendMessage={handleSendMessage} />
                        </div>}
                </main>
            </div>
        </div >
    );
}