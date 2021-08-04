import React, { useState, useEffect, useCallback } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';
import { ChatList } from './components/ChatList/ChatList';
import ChatIcon from '@material-ui/icons/Chat';
import './App.css';

function App() {

  const [messages, setMessage] = useState([]);
  const handleSendMessage = useCallback((newMessage) => {
    setMessage([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author !== 'Robot') {
      setTimeout(() => {
        const robotMess = {
          author: 'Robot',
          text: 'hello',
          id: Date.now()
        };
        setMessage([...messages, robotMess]);
      }, 1500);
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="App-content">
        <header className="App-header">
          <div className="App-header__wrapper">
            <button className="App-header__menu">
              <ChatIcon></ChatIcon>
            </button>
            <h3 className="App-header__title">Chats</h3>
          </div>
        </header>
        <main className="main">
          <ChatList />
          <div className="chatbox">
            <MessageList messages={messages} />
            <Form onSendMessage={handleSendMessage} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

