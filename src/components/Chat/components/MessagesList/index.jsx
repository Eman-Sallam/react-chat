import React, { useContext } from 'react';
import { ChatContext } from '../../../../App';
import MessageItem from '../MessageItem';
import style from './index.module.css';

const MessagesList = () => {
  let { messages } = useContext(ChatContext);
  return (
    <div className={style.messagesList}>
      <div className="d-flex justify-content-end flex-column-reverse">
        {messages && messages.map((msg) => <MessageItem msg={msg} key={msg.id}></MessageItem>)}
      </div>
    </div>
  );
};

export default MessagesList;
