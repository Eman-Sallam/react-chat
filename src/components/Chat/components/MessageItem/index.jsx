import React, { useContext } from 'react';
import style from './index.module.css';
import { ChatSessionsContext } from '../../../../Context/Sessions';

const MessageItem = ({ msg }) => {
  const isUserMsg = msg.sender === 'user';
  let { isSmallScreen, displayForamttedDate } = useContext(ChatSessionsContext);
  return (
    <>
      {isUserMsg ? (
        <div
          className={`${style.messageContainer} ${style.messageContainerUser}`}>
          <div className='row align-items-end gx-2 flex-row-reverse'>
            <div className='col-auto'>
              <div
                className={`${style.senderImg} ${
                  isSmallScreen ? style.senderImgSm : style.senderImgLg
                } bg-primary`}>
                <i
                  className={`${
                    isSmallScreen ? style.faSm : style.faLg
                  } fa-solid fa-user`}></i>
              </div>
            </div>
            <div className='col'>
              <div className={`${style.messageItem} ${style.messageItemUser}`}>
                {msg.content}
              </div>
              <p
                className={`${style.messageTime} m-0 text-black-50 px-3  text-end fw-medium`}>
                {/* used is as time */}
                {displayForamttedDate(msg.id)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.messageContainer}>
          <div className='row align-items-end gx-2'>
            <div className='col-auto'>
              <div
                className={`${style.senderImg} 
                  ${
                    isSmallScreen ? style.senderImgSm : style.senderImgLg
                  } bg-secondary`}>
                <i
                  className={`${
                    isSmallScreen ? style.faSm : style.faLg
                  } fa-solid fa-user-astronaut`}></i>
              </div>
            </div>
            <div className='col'>
              <div className={style.messageItem}>{msg.content}</div>
              <p
                className={`${style.messageTime} m-0 text-black-50 px-3  text-start fw-medium`}>
                {displayForamttedDate(msg.id)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MessageItem;
