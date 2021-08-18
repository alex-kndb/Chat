import React from 'react';
import './Message.css';

export const Message = ({ mess }) => {
    const textAlign = mess.author === 'Robot' ? { textAlign: 'left' } : { textAlign: 'right' }
    return (
        <div className="message" style={textAlign} >
            <p className="message__author">{mess.author}:</p>
            <p className="message__text">{mess.text}</p>
        </div >
    )
};
