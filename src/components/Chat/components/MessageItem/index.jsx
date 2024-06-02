import React from 'react';
import style from './index.module.css';

const MessageItem = ({ msg }) => {
  return (
    <div
      className={`${style.messageItem} 
    ${msg.sender === 'user' && style.messageItemOwn}`}
    >
      {msg.content}
    </div>
  );
};
export default MessageItem;
