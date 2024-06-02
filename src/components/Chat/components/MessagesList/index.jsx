import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../../../App';
import MessageItem from '../MessageItem';
import style from './index.module.css';

const MessagesList = () => {
  let { selectedSession } = useContext(ChatSessionsContext);
  return (
    <div className={style.messagesList}>
      <div className='d-flex justify-content-end flex-column-reverse'>
        {selectedSession?.messages &&
          selectedSession.messages.map((msg) => (
            <MessageItem msg={msg} key={msg.id}></MessageItem>
          ))}
      </div>
    </div>
  );
};

export default MessagesList;
