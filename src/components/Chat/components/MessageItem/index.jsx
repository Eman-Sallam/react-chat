import React from 'react';
import style from './index.module.css';

const MessageItem = ({ msg }) => {
  return (
    <div
      className={`${style.messageItem} 
    ${msg.user === 'owner' && style.messageItemOwn}`}
    >
      {msg.text}
    </div>
  );
};
export default MessageItem;
