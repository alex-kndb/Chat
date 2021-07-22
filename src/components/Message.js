import './Message.css'

function Message(props) {
    return (
        <p className="messageText">{props.text}</p>
    )
};

export default Message;