import React, { useContext, useEffect } from 'react';
import logo from '../../assets/logo-horizontal.webp';
import dayjs from 'dayjs';

import { ChatSessionsContext } from '../../App';

const Header = () => {
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
    <>
      <nav className='navbar bg-light border-2 border-primary border-bottom'>
        <div className='container-fluid'>
          <span className='navbar-brand'>
            <img
              src={logo}
              alt='Logo'
              width='100px'
              className='d-inline-block align-text-top'
            />
          </span>
          <div className='d-flex'>
            <button
              type='button'
              className='btn btn-outline-primary btn-sm'
              onClick={handleStartNewSession}
              title='Start New Chat'>
              <i className='fa-solid fa-plus'></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
