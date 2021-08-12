import React from 'react';
import './Message.css';

export const Message = ({ mess }) => {
    // console.log('message-----------', mess);
    const style = mess.author === 'Robot' ? { textAlign: 'left' } : { textAlign: 'right' }
    return (
        <div className="message" style={style} >
            <p className="message__author">{mess.author}:</p>
            <p className="message__text">{mess.text}</p>
        </div >
    )
};
