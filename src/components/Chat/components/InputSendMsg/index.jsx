import React, { useState, useContext } from 'react';
import { ChatSessionsContext } from '../../../../Context/Sessions';

const InputSendMsg = () => {
  let { sessions, setSessions, selectedSessionID } =
    useContext(ChatSessionsContext);

  // Saving new msg txt
  const [msgTxt, setMsgTxt] = useState('');
  const handleOnChange = (e) => {
    setMsgTxt(e.target.value);
  };

  // handle update sessions with new msgs
  const handleUpdateSessions = (index, sender) => {
    const SessionsArr = [...sessions];
    SessionsArr[index].messages.push({
      sender: sender,
      id: Date.now(),
      content: msgTxt
    });
    return SessionsArr;
  };

  // Adding a new chat msg
  const handleSendMsg = (e, selectedSessionID) => {
    e.preventDefault();

    const selectedSessionIndex = sessions.findIndex(
      (session) => session.id === selectedSessionID
    );

    const updatedSessionsUserMsg = handleUpdateSessions(
      selectedSessionIndex,
      'user'
    );
    setSessions(updatedSessionsUserMsg);

    // Handle parrot back msg
    setTimeout(() => {
      const updatedSessionsBotMsg = handleUpdateSessions(
        selectedSessionIndex,
        'bot'
      );
      setSessions(updatedSessionsBotMsg);
    }, 1000);

    setMsgTxt('');
  };

  return (
    <div className='bg-secondary px-2 py-3 inputSendMsg'>
      <form
        className='px-1'
        onSubmit={(e) => handleSendMsg(e, selectedSessionID)}>
        <div className='row gx-2'>
          <div className='col-9 col-md-10'>
            <input
              className='form-control'
              type='text'
              onChange={handleOnChange}
              placeholder='Enter Message...'
              name='message'
              aria-label='Enter Message...'
              value={msgTxt}
            />
          </div>
          <div className='col-3 col-md-2'>
            <button
              type='submit'
              disabled={!msgTxt}
              className='btn btn-primary w-100 fw-bold icon-link justify-content-center'>
              Send <i className='fa-solid fa-paper-plane'></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputSendMsg;
