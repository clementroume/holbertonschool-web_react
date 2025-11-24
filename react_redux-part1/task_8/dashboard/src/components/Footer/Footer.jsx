import React from 'react';
import { useSelector } from 'react-redux';
import { getFullYear, getFooterCopy } from '../../utils/utils';
import './Footer.css';

function Footer() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
