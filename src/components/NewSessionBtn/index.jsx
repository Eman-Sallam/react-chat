import React, { useContext, useEffect } from 'react';

import { ChatSessionsContext } from '../../App';

const NewSessionBtn = () => {
  let { sessions, setSessions } = useContext(ChatSessionsContext);

  const handleStartNewSession = () => {
    setSessions([
      ...sessions,
      {
        id: Date.now(),
        dateTime: Date.now(),
        messages: []
      }
    ]);
  };

  // Update Sessions to localstorge
  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }, [sessions]);

  return (
    <button
      type='button'
      className='btn btn-outline-primary btn-sm'
      onClick={handleStartNewSession}
      title='Start New Chat'>
      <i className='fa-solid fa-plus'></i>
    </button>
  );
};

export default NewSessionBtn;
