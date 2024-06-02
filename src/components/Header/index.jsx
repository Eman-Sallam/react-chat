import React from 'react';
import logo from '../../assets/logo-horizontal.webp';
import NewSessionBtn from '../NewSessionBtn';

const Header = () => {
  return (
    <>
      <nav className='navbar bg-light border-2 border-primary border-bottom'>
        <div className='container-fluid'>
          <span className='navbar-brand'>
            <img
              src={logo}
              alt='Logo'
              width='100px'
              className='d-inline-block align-text-top'
            />
          </span>
          <div className='d-flex'>
            <NewSessionBtn></NewSessionBtn>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
