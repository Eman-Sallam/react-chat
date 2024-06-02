import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../App';
import SessionItem from './components/SessionItem';

const SessionsList = () => {
  let { sessions } = useContext(ChatSessionsContext);
  return (
    <>
      {sessions &&
        sessions.map((session) => (
          <SessionItem sessionItem={session} key={session.id}></SessionItem>
        ))}
    </>
  );
};

export default SessionsList;