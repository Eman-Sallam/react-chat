import React, { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import SessionsList from './components/SessionsList';
import Chat from './components/Chat';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export let ChatSessionsContext = createContext('');

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleWindowSizeChange = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  // Get Saved chat Sessions History from localStorage
  const chatSessionsHistory = JSON.parse(localStorage.getItem('sessions'));

  const [sessions, setSessions] = useState(
    chatSessionsHistory || [
      {
        id: Date.now(),
        dateTime: Date.now(),
        messages: []
      }
    ]
  );
  const [selectedSessionID, setSelectedSessionID] = useState(sessions[0].id);

  // Update Sessions to localstorge
  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }, [sessions]);

  return (
    <ChatSessionsContext.Provider
      value={{
        isSmallScreen,
        sessions,
        setSessions,
        selectedSessionID,
        setSelectedSessionID
      }}>
      <div className='m-0 p-0 bg-white'>
        <Header></Header>
        <div className='row g-0 '>
          {!isSmallScreen && (
            <div className='col-auto col-md-4 col-xl-3  bg-primary text-white sessions-container'>
              <SessionsList></SessionsList>
            </div>
          )}
          <div className='col'>
            <Chat></Chat>
          </div>
        </div>
      </div>
    </ChatSessionsContext.Provider>
  );
};

export default App;
