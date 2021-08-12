import React, { useEffect, useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList/ChatList';

import { AUTHORS } from '../../const';
import { addMessage } from '../../store/messages/actions';
import './Home.css';
import FormDialog from '../FormDialog/FormDialog';

export const Home = () => {

    const { chatId } = useParams();
    const chats = useSelector(state => state.chats.chatList);
    const messages = useSelector(state => state.messages.messageList);
    // console.log('messages-------', messages[chatId]);

    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(addMessage(chatId, newMessage));
    }, [dispatch, chatId]);

    useEffect(() => {
        if (chatId) {
            const robotMess = {
                author: AUTHORS.bot,
                text: 'hello',
                id: `${chatId}-${Date.now()}`
            };
            if (!messages[chatId]) {
                handleSendMessage(robotMess);
            }
            else if (messages[chatId][messages[chatId]?.length - 1].author !== AUTHORS.bot) {
                const timeout = setTimeout(() => {
                    handleSendMessage(robotMess);
                }, 1000);
                return () => clearTimeout(timeout);
            }
        }
    }, [chats, chatId, messages, handleSendMessage]);

    if (!chatId)
        return <Redirect to="/nochat" />;

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
                    <ChatList />
                    {!!chatId &&
                        <div className="chatbox">
                            <MessageList chatId={chatId} />
                            <Form onSendMessage={handleSendMessage} />
                        </div>}
                </main>
            </div>
        </div >
    );
}