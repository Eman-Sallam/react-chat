import React, { createContext, useState, useEffect } from 'react';

export let ChatSessionsContext = createContext('');

const SessionsContextProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

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

  const handleWindowSizeChange = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

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
      {children}
    </ChatSessionsContext.Provider>
  );
};

export default SessionsContextProvider;
