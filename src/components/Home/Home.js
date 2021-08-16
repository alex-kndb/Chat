import React, { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList/ChatList';
import { AUTHORS } from '../../const';
import { addMessage } from '../../store/messages/actions';
import FormDialog from '../FormDialog/FormDialog';
import { getChats, getMessages } from '../../store/selectors';
import { deleteChat } from '../../store/chats/actions';
import { deleteMessages } from '../../store/messages/actions';
import './Home.css';

export const Home = () => {

    const { chatId } = useParams();
    const chats = useSelector(getChats, shallowEqual);
    const messages = useSelector(getMessages, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(addMessage(chatId, newMessage));
    }, [dispatch, chatId]);

    const removeChat = useCallback((id) => {
        dispatch(deleteMessages(id));
        dispatch(deleteChat(id));
    }, [dispatch]);

    const findChat = useCallback(() => chats.filter(el => el.id === chatId), [chats, chatId]);

    useEffect(() => {
        const robotMess = {
            author: AUTHORS.bot,
            text: 'hello',
            id: `${chatId}-${Date.now()}`
        };
        if (chatId && !!findChat(chatId).length) {
            if (!messages[chatId]) {
                handleSendMessage(robotMess);
            }
            else if (messages[chatId][messages[chatId]?.length - 1]?.author !== AUTHORS.bot) {
                const timeout = setTimeout(() => {
                    handleSendMessage(robotMess);
                }, 1000);
                return () => clearTimeout(timeout);
            }
        }
    }, [chatId, chats, messages, handleSendMessage, findChat]);

    if (chatId && !findChat(chatId).length) {
        history.replace('/nochat');
    };

    return (
        <div className="App">
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