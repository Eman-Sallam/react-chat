import React, { useContext } from 'react';
import logo from '../../assets/logo-horizontal.webp';
import NewSessionBtn from '../NewSessionBtn';
import SessionsSmallScreen from '../SessionsSmallScreen';
import { ChatSessionsContext } from '../../App';

const Header = () => {
  let { isSmallScreen } = useContext(ChatSessionsContext);

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
          <div className='d-flex gx-2'>
            <NewSessionBtn></NewSessionBtn>
            {isSmallScreen && (
              <div className='ms-2'>
                <SessionsSmallScreen></SessionsSmallScreen>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
