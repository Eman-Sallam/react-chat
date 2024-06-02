import React, { useContext } from 'react';
import logo from '../../assets/logo-horizontal.webp';
import { ChatContext } from '../../App';

const Header = () => {
  let { setMessages } = useContext(ChatContext);
  const clearHistory = () => {
    localStorage.removeItem('messages');
    setMessages([]);
  };
  return (
    <>
      <nav className="navbar bg-light border-2 border-primary border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top" />
          </span>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={clearHistory}>
            clear history
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
