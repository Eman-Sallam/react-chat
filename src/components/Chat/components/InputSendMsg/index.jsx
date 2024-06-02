import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../../../App';

const InputSendMsg = () => {
  let { messages, setMessages } = useContext(ChatContext);

  const [msgTxt, setMsgTxt] = useState('');

  const handleOnChange = (e) => {
    setMsgTxt(e.target.value);
  };

  // Adding a new chat msg
  const handleSendMsg = (e) => {
    e.preventDefault();

    setMessages([...messages, { user: 'owner', id: Date.now(), text: msgTxt }]);

    // Handle parrot back msg
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { user: '', id: Date.now(), text: msgTxt }]);
    }, 1000);
    setMsgTxt('');
  };

  // Update msgs to localstorge
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="bg-secondary px-2 py-3 inputSendMsg">
      <form className="px-1" onSubmit={handleSendMsg}>
        <div className="row gx-3">
          <div className="col-9 col-md-10">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              placeholder="Enter Message..."
              name="message"
              aria-label="Enter Message..."
              value={msgTxt}
            />
          </div>
          <div className="col-3 col-md-2">
            <button type="submit" disabled={!msgTxt} className="btn btn-primary w-100 fw-bold">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputSendMsg;
