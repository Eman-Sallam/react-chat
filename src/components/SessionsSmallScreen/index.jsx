import React from 'react';
import SessionsList from '../SessionsList';

const SessionsSmallScreen = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-outline-primary btn-sm header-btn'
        data-bs-toggle='offcanvas'
        data-bs-target='#mobileSessions'
        aria-controls='mobileSessions'
        title='View Sessions'>
        <i className='fa-solid fa-comments fa-lg'></i>
      </button>

      <div
        className='offcanvas offcanvas-start shadow-lg'
        tabIndex='-1'
        id='mobileSessions'
        data-bs-backdrop='false'
        aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-header bg-light border-2 border-primary border-bottom'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            Sessions History
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'></button>
        </div>
        <div className='offcanvas-body bg-primary text-white p-0'>
          <SessionsList></SessionsList>
        </div>
      </div>
    </>
  );
};

export default SessionsSmallScreen;
