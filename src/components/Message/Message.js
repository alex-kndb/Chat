import React from 'react'
import './Message.css'

export const Message = ({ mess }) => {
    return (
        <div className="message">
            <p className="message__author">{mess.author}:</p>
            <p className="message__text">{mess.text}</p>
        </div>
    )
};