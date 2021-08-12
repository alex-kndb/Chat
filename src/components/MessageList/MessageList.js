import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import './MessageList.css';
import { Message } from '../Message/Message';

export const MessageList = ({ chatId }) => {
    const messages = useSelector(state => state.messages.messageList);

    const renderMessage = useCallback((mess, i) => (
        <Message mess={mess} key={i} />
    ), []);

    return (
        <div className="messageBox">
            {!!messages[chatId] &&
                <div>
                    {Object.values(messages[chatId]).map(renderMessage)}
                </div>}
        </div>
    )
};