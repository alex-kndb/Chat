import React, { useCallback } from 'react'
import './MessageList.css'
import { Message } from '../Message/Message'

export const MessageList = ({ messages }) => {

    const renderMessage = useCallback((mess) => (
        <Message mess={mess} key={mess.id} />
    ), []);

    return (
        <div className="messageBox">
            {messages.map(renderMessage)}
        </div>
    )
};