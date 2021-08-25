import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import { ChatList } from '../ChatList/ChatList';
import FormDialog from '../FormDialog/FormDialog';
import { getChats, getMessages } from '../../store/selectors';
import { deleteChat, initChatTracking } from '../../store/chats/actions';
import { deleteMessages } from '../../store/messages/actions';
import { addNewMessageWithFirebase, initMessageTracking } from '../../store/messages/actions';
import firebase from 'firebase';
import './Chats.css';

export const Chats = () => {

    // получение данных
    const { chatId } = useParams();
    const chats = useSelector(getChats, shallowEqual);
    const messages = useSelector(getMessages, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSendMessage = useCallback((message) => {
        dispatch(addNewMessageWithFirebase(chatId, {
            ...message,
            id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
        }));
    }, [dispatch, chatId, messages?.length]);

    useEffect(() => {
        dispatch(initMessageTracking());
        dispatch(initChatTracking());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(initChatTracking());
    // }, [dispatch]);

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
                        <FormDialog chats={chats} />
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