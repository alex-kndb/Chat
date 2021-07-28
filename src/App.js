import React, { useState, useEffect } from 'react'

// import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Form from './components/Form'

function App() {

  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleMessage = () => {
    const newMessage = { author: "User", text: value };
    setMessageList([...messageList, newMessage]);
    setValue('');
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
        const robotMess = { author: 'Robot', text: 'hello' };
        setMessageList([...messageList, robotMess]);
      }
    }, 1500);
    return () => clearInterval(id);
  }, [messageList]);


  return (
    <div className="App">
      <header className="App-header">
        <Message
          messageList={messageList}
        />
        <Form
          handleMessage={handleMessage}
          handleChange={handleChange}
          value={value}
        />
      </header>
    </div>
  );
}

export default App;

