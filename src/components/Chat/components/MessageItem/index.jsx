import React from 'react';
import style from './index.module.css';

const MessageItem = ({ msg }) => {
  const isUserMsg = msg.sender === 'user';
  return (
    <>
      <div
        className={`${style.messageContainer} 
                    ${isUserMsg && style.messageContainerUser}`}>
        <div
          className={`row align-items-end gx-2
                      ${isUserMsg && 'flex-row-reverse'}`}>
          <div className='col-auto'>
            <div
              className={`${style.senderImg}
                          ${isUserMsg ? 'bg-primary' : 'bg-secondary'}`}>
              {isUserMsg ? (
                <i className='fa-solid fa-user fa-xl'></i>
              ) : (
                <i className='fa-solid fa-user-astronaut fa-xl'></i>
              )}
            </div>
          </div>
          <div className='col'>
            <div
              className={`${style.messageItem} 
                          ${isUserMsg && style.messageItemUser}`}>
              {msg.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MessageItem;
