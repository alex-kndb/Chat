import React from 'react';
import { ChatList } from '../ChatList/ChatList';
import './NoChat.css';

export const NoChat = ({ chats }) => {
    return (
        <div className="nochat__wrapper">
            <div className="nochat">
                <h2 className="nochat__text">Please, select a chat!</h2>
                <ChatList chats={chats} />
            </div>
        </div>


    )
}