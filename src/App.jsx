import React, { createContext, useState } from 'react';
import Header from './components/Header';
import SessionsList from './components/SessionsList';
import Chat from './components/Chat';
import './App.css';

export let ChatSessionsContext = createContext('');

const App = () => {
  // Get Saved chat Sessions History from localStorage
  const chatSessionsHistory = JSON.parse(localStorage.getItem('sessions'));

  const [sessions, setSessions] = useState(chatSessionsHistory || []);
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <ChatSessionsContext.Provider
      value={{ sessions, setSessions, selectedSession, setSelectedSession }}>
      <div className='m-0 p-0 bg-white'>
        <Header></Header>
        <div className='row g-0 chat-sessions-container'>
          <div className='col-auto col-md-3 col-xl-2 bg-primary text-white '>
            <SessionsList></SessionsList>
          </div>
          <div className='col'>
            <Chat></Chat>
          </div>
        </div>
      </div>
    </ChatSessionsContext.Provider>
  );
};

export default App;
