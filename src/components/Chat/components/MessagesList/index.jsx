import React, { useContext } from 'react';
import { ChatSessionsContext } from '../../../../Context/Sessions';
import MessageItem from '../MessageItem';
import style from './index.module.css';

const MessagesList = () => {
  let { sessions, selectedSessionID } = useContext(ChatSessionsContext);
  const selectedSessionData = sessions.filter(
    (session) => session.id === selectedSessionID
  )[0];
  return (
    <>
      <div className={style.messagesContainer}>
        {selectedSessionData.messages.length > 0 ? (
          <div className={style.messagesList}>
            <div className='d-flex justify-content-end flex-column-reverse'>
              {selectedSessionData.messages.map((msg) => (
                <MessageItem msg={msg} key={msg.id}></MessageItem>
              ))}
            </div>
          </div>
        ) : (
          <div className='d-flex align-items-end h-100 '>
            <h6 className='text-center text-black-50'>
              Let's start your chat....
            </h6>
          </div>
        )}
      </div>
    </>
  );
};

export default MessagesList;
