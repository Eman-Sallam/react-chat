import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../../../Context/Sessions';
import dayjs from 'dayjs';
import style from './index.module.css';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const SessionItem = ({ sessionDetails, isSelected }) => {
  let { isSmallScreen, sessions, setSessions, setSelectedSessionID } =
    useContext(ChatSessionsContext);

  const handleSelectedSessionID = () => {
    setSelectedSessionID(sessionDetails.id);

    // to Close side menu on small screen after select session
    if (isSmallScreen) {
      let bsOffcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById('mobileSessions')
      );
      bsOffcanvas.hide();
    }
  };

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

  //  Delete Selected Session &  Update Sessions to localstorge
  const handleDeleteSession = (id) => {
    const updatedSessions = sessions.filter((session) => session.id !== id);
    setSessions([...updatedSessions]);
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));

    setSelectedSessionID(updatedSessions[0].id);
  };

  return (
    <div
      className={`position-relative border-bottom border-primary-subtle   
                ${style.sessionItem} ${isSelected ? style.selected : ''}`}>
      <div
        className={`p-3 d-flex align-items-center 
                  ${isSelected && style.selected}`}
        onClick={handleSelectedSessionID}>
        <i className={`fa-solid fa-comment-dots fa-lg ${style.chatIcn}`}></i>
        <span className='fw-semibold'>Chat Started at</span>
        <span className='fst-italic ms-1'>
          {displayForamttedDate(sessionDetails.dateTime)}
        </span>
      </div>
      {sessions.length > 1 && (
        <div className='position-absolute top-0 end-0 '>
          <button
            type='button'
            title='Delete Session'
            onClick={() => handleDeleteSession(sessionDetails.id)}
            className='btn btn-link link-light link-opacity-50 link-opacity-100-hover px-1 py-0'>
            <i className='fa-solid fa-trash fa-sm'></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default SessionItem;
