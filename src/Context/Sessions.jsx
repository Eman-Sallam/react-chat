import React, { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';

export let ChatSessionsContext = createContext('');

const SessionsContextProvider = ({ children }) => {
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

  // Update Sessions to localstorge
  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }, [sessions]);

  // Compare the current date with the display date to display "Today"
  const displayForamttedDate = (dateTime) => {
    const currentDate = dayjs();
    if (currentDate.isSame(dateTime, 'day')) {
      return `Today ${dayjs(dateTime).format('HH:mm')}`;
    } else {
      const formattedDate = dayjs(dateTime).format('MMM DD HH:mm');
      return formattedDate;
    }
  };

  return (
    <ChatSessionsContext.Provider
      value={{
        isSmallScreen,
        sessions,
        setSessions,
        selectedSessionID,
        setSelectedSessionID,
        displayForamttedDate
      }}>
      {children}
    </ChatSessionsContext.Provider>
  );
};

export default SessionsContextProvider;
