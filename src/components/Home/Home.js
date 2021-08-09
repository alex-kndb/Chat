import React, { useEffect, useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList/ChatList';
import ChatIcon from '@material-ui/icons/Chat';
import { AUTHORS } from '../../const';
import './Home.css';

export const Home = ({ chats, setChats }) => {
    const { chatId } = useParams();

    const handleSendMessage = useCallback((newMessage) => {
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage]
            },
        });
    }, [chats, chatId, setChats]);

    const addNewChat = useCallback(() => {
        setChats(prevChats => ({
            ...prevChats,
            ['chat' + (Object.keys(prevChats).length + 1)]: {
                id: 'chat' + (Object.keys(prevChats).length + 1),
                name: 'Chat ' + (Object.keys(prevChats).length + 1),
                messages: [{ author: AUTHORS.bot, text: 'Hi!', id: Date.now() }]
            },
        }));
    }, [setChats]);

    const removeChat = useCallback((e) => {
        e.preventDefault();
        let chatId = e.target.id;
        console.log(chatId);
        setChats(prevChats => ({
            [chatId]: {}, ...prevChats
        }));
    }, [setChats]);


    useEffect(() => {
        if (chatId && chats[chatId] && chats[chatId].messages[chats[chatId].messages.length - 1].author !== AUTHORS.bot) {
            const timeout = setTimeout(() => {
                const robotMess = {
                    author: AUTHORS.bot,
                    text: 'hello',
                    id: Date.now()
                };
                handleSendMessage(robotMess);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [chats, chatId, handleSendMessage]);

    if (!chatId || !chats[chatId])
        return <Redirect to="/nochat" />;


    return (
        <div className="App">
            <div className="App-content">
                <header className="App-header">
                    <div className="App-header__wrapper">
                        <button className="App-header__menu" onClick={addNewChat}>
                            <ChatIcon></ChatIcon>
                        </button>
                        <h3 className="App-header__title">Chats</h3>
                    </div>
                </header>
                <main className="main">
                    <ChatList chats={chats} chatId={chatId} removeChat={removeChat} />
                    {!!chatId && !!chats[chatId] &&
                        <div className="chatbox">
                            <MessageList messages={chats[chatId].messages} />
                            <Form onSendMessage={handleSendMessage} />
                        </div>}
                </main>
            </div>
        </div>
    );
}