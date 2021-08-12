import React from 'react';
import { useSelector } from 'react-redux';
import { ChatList } from '../ChatList/ChatList';
import './NoChat.css';

export const NoChat = () => {
    const chats = useSelector(state => state.chats.ChatList);
    return (
        <div className="nochat__wrapper">
            <div className="nochat">
                <h2 className="nochat__text">Please, select a chat!</h2>
                <ChatList chats={chats} />
            </div>
        </div>
    )
}