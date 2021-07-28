import './Message.css'

function Message(props) {

    return (
        <div className="messagesBox">
            {props.messageList.map((mess) => (
                <div className="message">
                    <p className="message__author">{mess.author}:</p>
                    <p className="message__text">{mess.text}</p>
                </div>
            ))}
        </div>
    )
};

export default Message;