import React from 'react';
import Header from './components/Header';
import SessionsList from './components/SessionsList';
import Chat from './components/Chat';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SessionsContextProvider from './Context/Sessions';

const App = () => {
  return (
    <SessionsContextProvider>
      <div className='m-0 p-0 bg-white'>
        <Header></Header>
        <div className='row g-0 '>
          <div className='col-auto col-md-4 col-xl-3  bg-primary text-white sessions-container d-none d-lg-block'>
            <SessionsList></SessionsList>
          </div>
          <div className='col'>
            <Chat></Chat>
          </div>
        </div>
      </div>
    </SessionsContextProvider>
  );
};

export default App;
