import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../App';
import SessionItem from './components/SessionItem';

const SessionsList = () => {
  let { sessions, selectedSessionID } = useContext(ChatSessionsContext);
  return (
    <>
      {sessions &&
        sessions.map((session) => (
          <SessionItem
            sessionDetails={session}
            isSelected={session.id === selectedSessionID}
            key={session.id}></SessionItem>
        ))}
    </>
  );
};

export default SessionsList;
