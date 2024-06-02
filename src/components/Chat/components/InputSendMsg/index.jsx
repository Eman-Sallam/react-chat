import React, { useState, useEffect, useContext } from 'react';
import { ChatSessionsContext } from '../../../../App';

const InputSendMsg = () => {
  let { messages, setMessages } = useContext(ChatSessionsContext);

  const [msgTxt, setMsgTxt] = useState('');

  const handleOnChange = (e) => {
    setMsgTxt(e.target.value);
  };

  // Adding a new chat msg
  const handleSendMsg = (e) => {
    e.preventDefault();

    setMessages([
      ...messages,
      { sender: 'user', id: Date.now(), content: msgTxt }
    ]);

    // Handle parrot back msg
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', id: Date.now(), content: msgTxt }
      ]);
    }, 1000);
    setMsgTxt('');
  };

  // Update msgs to localstorge
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <div className='bg-secondary px-2 py-3 inputSendMsg'>
      <form className='px-1' onSubmit={handleSendMsg}>
        <div className='row gx-3'>
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
