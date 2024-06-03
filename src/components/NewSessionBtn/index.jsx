import React, { useContext } from 'react';

import { ChatSessionsContext } from '../../Context/Sessions';

const NewSessionBtn = () => {
  let { sessions, setSessions, setSelectedSessionID } =
    useContext(ChatSessionsContext);

  const handleStartNewSession = () => {
    const SessionsArr = [...sessions];
    SessionsArr.push({
      id: Date.now(),
      dateTime: Date.now(),
      messages: []
    });
    setSessions(SessionsArr);
    setSelectedSessionID(SessionsArr[SessionsArr.length - 1].id);
  };

  return (
    <button
      type='button'
      className='btn btn-outline-primary btn-sm header-btn'
      onClick={handleStartNewSession}
      title='Start New Chat'>
      <i className='fa-solid fa-plus fa-lg'></i>
    </button>
  );
};

export default NewSessionBtn;
