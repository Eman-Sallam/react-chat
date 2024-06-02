import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../../../App';
import dayjs from 'dayjs';
import style from './index.module.css';

const SessionItem = ({ sessionItem }) => {
  let { sessions, setSessions, setSelectedSession } =
    useContext(ChatSessionsContext);

  const handleSelectedSession = () => {
    setSelectedSession(sessionItem);
  };

  // Compare the current date with the display date to display "Today"
  const displayForamttedDate = (dateTime) => {
    const currentDate = dayjs();
    if (currentDate.isSame(dateTime, 'day')) {
      return `Today ${dayjs(dateTime).format('HH:mm')}`;
    } else {
      const formattedDate = dayjs(dateTime).format('MMM DD');
      return formattedDate;
    }
  };

  //  Delete Selected Session &  Update Sessions to localstorge
  const handleDeleteSession = (id) => {
    const updatedSessions = sessions.filter((session) => session.id !== id);
    setSessions([...updatedSessions]);
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  return (
    <div className='position-relative'>
      <div
        className={`border-bottom border-primary-subtle p-2 ${style.sessionItem}`}
        onClick={handleSelectedSession}>
        Chat Started at {displayForamttedDate(sessionItem.dateTime)}
      </div>
      <div className='position-absolute top-0 end-0 '>
        <button
          type='button'
          title='Delete Session'
          onClick={() => handleDeleteSession(sessionItem.id)}
          className='btn btn-link link-light link-opacity-50 link-opacity-100-hover px-1 py-0'>
          <i className='fa-regular fa-circle-xmark'></i>
        </button>
      </div>
    </div>
  );
};

export default SessionItem;
