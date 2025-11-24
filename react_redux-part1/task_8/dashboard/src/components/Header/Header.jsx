import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/holberton-logo.jpg';
import { logout } from '../../features/auth/authSlice';
import './Header.css';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {isLoggedIn && (
        <div id="logoutSection">
          Welcome {user ? user.email : ''} (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout());
            }}
          >
            logout
          </a>
          )
        </div>
      )}
    </>
  );
}

export default Header;
