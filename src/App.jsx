import React from 'react';
import { createContext, useState } from 'react';
import Header from './components/Header';
import Chat from './components/Chat';
import './App.css';

export let ChatContext = createContext('');

const App = () => {
  const chatHistory = JSON.parse(localStorage.getItem('messages'));

  const [messages, setMessages] = useState(chatHistory || []);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      <div className="m-0 p-0 bg-white">
        <Header></Header>
        <Chat></Chat>
      </div>
    </ChatContext.Provider>
  );
};

export default App;
