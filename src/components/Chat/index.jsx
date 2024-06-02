import React from 'react';
import InputSendMsg from './components/InputSendMsg';
import MessagesList from './components/MessagesList';

const Chat = () => {
  return (
    <>
      <MessagesList></MessagesList>
      <InputSendMsg></InputSendMsg>
    </>
  );
};
export default Chat;
