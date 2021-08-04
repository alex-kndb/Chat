import React, { useState, useEffect, useCallback, useParams } from 'react';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList/ChatList';
import ChatIcon from '@material-ui/icons/Chat';
import './Home.css';

const InitChatsState = {
    chat1: {
        id: 'chat1',
        name: 'Chat 1',
        messages: [{ author: 'Robot', text: `hello! Welcome to this chat!`, id: 'chat1-1' }]
    },
    chat2: {
        id: 'chat2',
        name: 'Chat 2',
        messages: [{ author: 'Robot', text: 'hello! Welcome to this chat!', id: 'chat2-1' }]
    },
    chat3: {
        id: 'chat3',
        name: 'Chat 3',
        messages: [{ author: 'Robot', text: 'hello! Welcome to this chat!', id: 'chat3-1' }]
    },
}

export const Home = (props) => {
    const { chatId } = props.match.params;
    // export const Home = () => {
    // const { chatId } = useParams();

    const [chats, setChats] = useState(InitChatsState);
    const handleSendMessage = useCallback((newMessage) => {
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage]
            },
        });
    }, [chats, chatId]);

    const addNewChat = useCallback(() => {
        setChats((prevChats) => ({
            ...prevChats,
            ['chat' + (Object.keys(prevChats).length + 1)]: {
                id: 'chat' + (Object.keys(prevChats).length + 1),
                name: 'Chat ' + (Object.keys(prevChats).length + 1),
                messages: [{ author: 'Robot', text: 'Hi!', id: Date.now() }]
            },
        }));
    }, [chats]);

    useEffect(() => {
        if (chatId && chats[chatId].messages[chats[chatId].messages.length - 1].author !== 'Robot') {
            const timeout = setTimeout(() => {
                const robotMess = {
                    author: 'Robot',
                    text: 'hello',
                    id: Date.now()
                };
                handleSendMessage(robotMess);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [chats, chatId]);

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
                    <ChatList chats={chats} />
                    {!!chatId &&
                        <div className="chatbox">
                            <MessageList messages={chats[chatId].messages} />
                            <Form onSendMessage={handleSendMessage} />
                        </div>}
                </main>
            </div>
        </div>
    );
}