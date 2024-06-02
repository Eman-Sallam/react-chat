import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../../../App';
import MessageItem from '../MessageItem';
import style from './index.module.css';

const MessagesList = () => {
  let { sessions, selectedSessionID } = useContext(ChatSessionsContext);
  const selectedSessionData = sessions.filter(
    (session) => session.id === selectedSessionID
  )[0];

  return (
    <div className={style.messagesList}>
      <div className='d-flex justify-content-end flex-column-reverse'>
        {selectedSessionData &&
          selectedSessionData.messages.map((msg) => (
            <MessageItem msg={msg} key={msg.id}></MessageItem>
          ))}
      </div>
    </div>
  );
};

export default MessagesList;
