import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../App';
import SessionItem from './components/SessionItem';
import dayjs from 'dayjs';

const SessionsList = () => {
  let { sessions, selectedSessionID } = useContext(ChatSessionsContext);

  // Sorting Sessions by time
  const reverseSessionsArrOrder = sessions.sort((a, b) =>
    dayjs(a.dateTime).isBefore(dayjs(b.dateTime)) ? 1 : -1
  );

  return (
    <>
      {reverseSessionsArrOrder &&
        reverseSessionsArrOrder.map((session) => (
          <SessionItem
            sessionDetails={session}
            isSelected={session.id === selectedSessionID}
            key={session.id}></SessionItem>
        ))}
    </>
  );
};

export default SessionsList;
